import React from 'react'
import Layout from '@/components/Layout'
import { Signika_Negative } from '@next/font/google';
import Link from 'next/link';

const themeFontBold = Signika_Negative({ weight: ['600'], subsets: ['latin'] });
const themeFont = Signika_Negative({ weight : ['400'], subsets: ['latin'] });

function Privacy() {
  return (
    <div>
        <Layout>
          <div className= 'top-0 left-0 h-min w-full grid grid-cols-12 pt-48'>
            <div className='col-start-3 col-end-7 h-screen flex flex-col gap-2'>
              <Link href="/about" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>About</Link>
              <Link href="/contactus" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Contact Us</Link>
              <p className={'text-[40px] font-bold text-blue-900  '.concat(themeFontBold.className)}>Privacy</p>
              <Link href="/terms" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Terms of Use</Link>
              <Link href="/shipping" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Shipping and Return</Link>
              <Link href="/payment" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Payment Policies</Link>
            </div>
            <div className='col-start-7 col-end-12 '>
              <p className={'text-xl text-blue-900 '.concat(themeFont.className)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo tortor, commodo ut arcu ac, aliquam fermentum augue. Cras lorem lacus, suscipit sit amet neque eget, pulvinar tincidunt magna. In volutpat dignissim urna, in finibus nibh mollis ac. Nam efficitur varius sodales. Vestibulum orci sem, posuere sed fringilla vitae, tincidunt vel leo. Aenean venenatis ante diam, vel elementum dui volutpat sed. Nam sit amet elementum neque.
Sed lobortis fermentum mauris, sit amet convallis purus porta quis. Curabitur eu leo consectetur, iaculis mauris non, mollis ante. Cras ante ante, ultricies vitae nibh a, congue cursus turpis. Integer non libero sit amet dui viverra tempus. Aenean augue lectus, interdum quis maximus elementum, molestie nec nulla. Integer iaculis pretium odio a blandit. Praesent interdum, felis et finibus malesuada, risus ipsum dictum lectus, sed euismod lacus velit a nibh. Proin interdum velit et lacus tristique dignissim. Quisque non quam nulla. Vestibulum tellus lorem, consequat in faucibus nec, suscipit nec dui. Vestibulum sagittis pharetra sem, accumsan mattis nisl gravida in. Phasellus ut erat auctor dui mollis facilisis eget ac nisi. Proin vitae diam faucibus, venenatis odio sed, ornare dolor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo tortor, commodo ut arcu ac, aliquam fermentum augue. Cras lorem lacus, suscipit sit amet neque eget, pulvinar tincidunt magna. In volutpat dignissim urna, in finibus nibh mollis ac. Nam efficitur varius sodales. Vestibulum orci sem, posuere sed fringilla vitae, tincidunt vel leo. Aenean venenatis ante diam, vel elementum dui volutpat sed. Nam sit amet elementum neque.
Sed lobortis fermentum mauris, sit amet convallis purus porta quis. Curabitur eu leo consectetur, iaculis mauris non, mollis ante. Cras ante ante, ultricies vitae nibh a, congue cursus turpis. Integer non libero sit amet dui viverra tempus. Aenean augue lectus, interdum quis maximus elementum, molestie nec nulla. Integer iaculis pretium odio a blandit. Praesent interdum, felis et finibus malesuada, risus ipsum dictum lectus, sed euismod lacus velit a nibh. Proin interdum velit et lacus tristique dignissim. Quisque non quam nulla. Vestibulum tellus lorem, consequat in faucibus nec, suscipit nec dui. Vestibulum sagittis pharetra sem, accumsan mattis nisl gravida in. Phasellus ut erat auctor dui mollis facilisis eget ac nisi. Proin vitae diam faucibus, venenatis odio sed, ornare dolor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo tortor, commodo ut arcu ac, aliquam fermentum augue. Cras lorem lacus, suscipit sit amet neque eget, pulvinar tincidunt magna. In volutpat dignissim urna, in finibus nibh mollis ac. Nam efficitur varius sodales. Vestibulum orci sem, posuere sed fringilla vitae, tincidunt vel leo. Aenean venenatis ante diam, vel elementum dui volutpat sed. Nam sit amet elementum neque.
Sed lobortis fermentum mauris, sit amet convallis purus porta quis. Curabitur eu leo consectetur, iaculis mauris non, mollis ante. Cras ante ante, ultricies vitae nibh a, congue cursus turpis. Integer non libero sit amet dui viverra tempus. Aenean augue lectus, interdum quis maximus elementum, molestie nec nulla. Integer iaculis pretium odio a blandit. Praesent interdum, felis et finibus malesuada, risus ipsum dictum lectus, sed euismod lacus velit a nibh. Proin interdum velit et lacus tristique dignissim. Quisque non quam nulla. Vestibulum tellus lorem, consequat in faucibus nec, suscipit nec dui. Vestibulum sagittis pharetra sem, accumsan mattis nisl gravida in. Phasellus ut erat auctor dui mollis facilisis eget ac nisi. Proin vitae diam faucibus, venenatis odio sed, ornare dolor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo tortor, commodo ut arcu ac, aliquam fermentum augue. Cras lorem lacus, suscipit sit amet neque eget, pulvinar tincidunt magna. In volutpat dignissim urna, in finibus nibh mollis ac. Nam efficitur varius sodales. Vestibulum orci sem, posuere sed fringilla vitae, tincidunt vel leo. Aenean venenatis ante diam, vel elementum dui volutpat sed. Nam sit amet elementum neque.
Sed lobortis fermentum mauris, sit amet convallis purus porta quis. Curabitur eu leo consectetur, iaculis mauris non, mollis ante. Cras ante ante, ultricies vitae nibh a, congue cursus turpis. Integer non libero sit amet dui viverra tempus. Aenean augue lectus, interdum quis maximus elementum, molestie nec nulla. Integer iaculis pretium odio a blandit. Praesent interdum, felis et finibus malesuada, risus ipsum dictum lectus, sed euismod lacus velit a nibh. Proin interdum velit et lacus tristique dignissim. Quisque non quam nulla. Vestibulum tellus lorem, consequat in faucibus nec, suscipit nec dui. Vestibulum sagittis pharetra sem, accumsan mattis nisl gravida in. Phasellus ut erat auctor dui mollis facilisis eget ac nisi. Proin vitae diam faucibus, venenatis odio sed, ornare dolor.
              </p>
          </div>
          </div>
        </Layout>
    </div>
  )
}

export default Privacy