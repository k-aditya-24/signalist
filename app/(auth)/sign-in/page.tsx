'use client';
import React from 'react'
import InputField from '@/components/forms/InputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import FooterLink from '@/components/forms/FooterLink';



const SignIn = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
    })
    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1 className='form-title'>LogIn Your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="john@contact.com"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } }}
                />
                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter Your Password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } }}
                />

                <button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>

                <FooterLink text="Don't have an account?" href="/sign-up" linkText="Sign Up" />
            </form>
        </>
    )
}

export default SignIn