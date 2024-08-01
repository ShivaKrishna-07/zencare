import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = async({params: {userId}}: SearchParamProps) => {

  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar max-h-screen container my-auto">
        <div className="sub-container max-w-[496px] ">
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width={1000}
            alt="patient"
            className=" mb-12 h10 w-[50%]"
          />

          <RegisterForm user={user} />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 Zencare
            </p>
            <Link href="/?admin=true">Admin</Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-h-screen max-w-[50%]"
      />
    </div>
  )
}

export default Register