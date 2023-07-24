import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import banner from '../img/donate-bg.jpg';

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({ mode: 'onChange' });
    const password = useRef({});
    password.current = watch('password', '');

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div  className='h-[100vh]' style={{ 'backgroundImage': `url(${banner})` }}>
            <div className="flex justify-center items-center h-full">
                
                <div className="w-full max-w-md">
                <h2 className=' text-center font-bold text-2xl text-slate-400 uppercase mb-5'>Register for ECO SUNSHINE</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-500 font-semibold mb-2"
                            >
                                Name
                            </label>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                id="name"
                                type="text"
                                className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-400'
                                    } p-2 rounded-lg focus:outline-none focus:border-[#7abf18]`}
                            />
                            {errors.name && (
                                <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-500 font-semibold mb-2"
                            >
                                Email
                            </label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid email format',
                                    },
                                })}
                                id="email"
                                type="email"
                                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-400'
                                    } p-2 rounded-lg focus:outline-none focus:border-[#7abf18]`}
                            />
                            {errors.email && (
                                <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-500 font-semibold mb-2"
                            >
                                Password
                            </label>
                            <input
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters',
                                    },
                                })}
                                id="password"
                                type="password"
                                className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-400'
                                    } p-2 rounded-lg focus:outline-none focus:border-[#7abf18]`}
                            />
                            {errors.password && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.password.message}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-gray-500 font-semibold mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                {...register('confirmPassword', {
                                    required: 'Please confirm your password',
                                    validate: (value) =>
                                        value === password.current || 'The passwords do not match',
                                })}
                                id="confirmPassword"
                                type="password"
                                className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-400'
                                    } p-2 rounded-lg focus:outline-none focus:border-[#7abf18]`}
                            />
                            {errors.confirmPassword && (
                                <div className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</div>
                            )}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-[#7abf18] text-white w-full py-2 px-4 rounded-md hover:bg-[#8fd72b] focus:outline-none focus:bg-[#7abf18]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Register'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;