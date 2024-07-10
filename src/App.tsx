import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Logo from './assets/logoNew.png';
import Facebook from './assets/Facebook.png';
import Linkedin from './assets/LinkedIn.png';
import Instagram from './assets/Instagram.png';
import Twitter from './assets/TwitterX.png';
// import Vector from './assets/Vector.svg';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_wtjolg4', 'template_1cypvd4', e.currentTarget, 'JjlMFGZ0r1pmGisPv')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });

    e.currentTarget.reset();
  };

  return (
    <>
      <div className="p-6">
        <img src={Logo} alt="logo" width={100} height={30} />
      </div>
      <div className="p-4 bg-cover bg-center bg-[url('./assets/backgr.svg')] flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-[#007BFF] font-extrabold text-7xl">
            Join The Waitlist For <br /> HussLin Today!
          </p>
        </div>
        <div className="text-center mt-4">
          <p className="text-4xl">
            Your One-Stop Platform For Seamless Interactions With <br /> Artisans And Professionals From All Walks Of Life.
          </p>
        </div>
        <div className="mt-4 p-4">
          {!submitted ? (
            <form className="items-center" onSubmit={sendEmail}>
              <input
                type="email"
                name="from_name"
                placeholder="Your Email Address"
                className="mb-2 p-4 border border-gray-300 rounded-2xl w-3/6 text-[#597da3] bg-[#E1F0FF]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="p-4 rounded-2xl mx-4 text-white bg-[#007BFF]">Join Waitlist!</button>
            </form>
          ) : (
            <p>Thank you for joining our waitlist.</p>
          )}
        </div>
        <div className="flex gap-4 mt-4">
          <div className="bg-[#007BFF] rounded-full p-2">
            <a href="https://www.linkedin.com/company/husslin/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="Linkedin" width={34} height={35} />
            </a>
          </div>
          <div className="bg-[#007BFF] rounded-full p-2">
            <img src={Instagram} alt="Instagram" width={34} height={35} />
          </div>
          <div className="bg-[#007BFF] rounded-full p-2">
            <a href="https://x.com/HussLinHQ" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" width={34} height={35} />
            </a>
          </div>
          <div className="bg-[#007BFF] rounded-full p-2">
            <img src={Facebook} alt="Facebook" width={34} height={35} />
          </div>
        </div>
      </div>
    </>
  );
}
