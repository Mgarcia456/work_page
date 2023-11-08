import React, { useState } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types'

import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import '../index.css';
import Robot from '../assets/robot.png';


const Hero = () => {
  return(
    <div className="pt-24 mt-5">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/* left col */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">What business are you?</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Main Hero Message to sell yourself!
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Sub-hero message, not too long and not too short. Make it just right!
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
        {/*  right col */}
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src={Robot} />
        </div>
      </div>
    </div>
  );
};

export default Hero;