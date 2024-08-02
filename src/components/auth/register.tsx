import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { registerFormSchema as formSchema } from '@/lib/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuth, useStorage } from 'reactfire';
import {
  createUserWithEmailAndPassword,
  AuthError,
  updateProfile,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { userLoadingStore } from '@/store/loading_store';

export const Register = () => {
  const auth = useAuth();
  const storage = useStorage();
  const { loading, setLoading } = userLoadingStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: '',
      confirmPassword: '',
      photoURL: undefined,
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      // 1.- Create User
      const { user } = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      console.log('User created');

      // 2. Save avatar
      const storageRef = ref(storage, 'avatars/' + user.uid + '.jpg');

      await uploadBytes(storageRef, values.photoURL);

      // 3. Get photoUrl
      const photoURL = await getDownloadURL(storageRef);

      await updateProfile(user, {
        displayName: values.displayName,
        photoURL,
        //photoURL: 'https://randomuser.me/api/portraits/men/59.jpg',
      });

      console.log('Profile updated');
    } catch (error) {
      const firebaseError = error as AuthError;
      console.log(firebaseError.code);

      if (firebaseError.code === 'auth/email-already-in-use') {
        form.setError('email', {
          type: 'manual',
          message: 'Email already in use',
        });

        return;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardDescription>Fill in the form below to</CardDescription>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@domain.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm your Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="photoURL"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Avatar</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        placeholder="Select your avatar image"
                        type="file"
                        accept="image/*, application/pdf"
                        onChange={(event) =>
                          onChange(event.target.files && event.target.files[0])
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{' '}
              <Button type="submit" disabled={loading}>
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
