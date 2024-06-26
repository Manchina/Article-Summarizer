import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>QuickQuill</span>
      </h1>
      <h2 className='desc'>
      QuickQuill is a revolutionary tool designed to streamline your reading experience. With its lightning-fast summarization capabilities, it distills lengthy articles into concise snippets, saving you valuable time.
      </h2>
    </header>
  );
};

export default Hero;
