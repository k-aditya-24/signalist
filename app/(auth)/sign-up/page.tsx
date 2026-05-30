'use client';
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { INVESTMENT_GOALS, RISK_TOLERANCE_OPTIONS, PREFERRED_INDUSTRIES } from '@/lib/constants';
import { CountrySelectField } from '@/components/forms/CountrySelectField';
import FooterLink from '@/components/forms/FooterLink';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: '',
            investmentGoals: '',
            riskTolerance: '',
            preferredIndustry: '',
        },
    })
    const onSubmit = async (data: SignUpFormData) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <h1 className='form-title'>Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                    validation={{ required: 'Full name is required', minLength: { value: 3, message: 'Full name must be at least 3 characters' }, maxLength: 50 }}
                />
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

                <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    required
                />

                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select Investment Goals"
                    control={control}
                    error={errors.investmentGoals}
                    options={INVESTMENT_GOALS}
                    required
                />

                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select Your Risk Level"
                    control={control}
                    error={errors.riskTolerance}
                    options={RISK_TOLERANCE_OPTIONS}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select Your Preferred Industry"
                    control={control}
                    error={errors.preferredIndustry}
                    options={PREFERRED_INDUSTRIES}
                    required
                />

                <button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Creating Accpunt...' : 'Start Your Investment Journey'}
                </button>

                <FooterLink text="Already have an account?" href="/sign-in" linkText="Sign In" />
            </form>
        </>
    )
}

export default SignUp