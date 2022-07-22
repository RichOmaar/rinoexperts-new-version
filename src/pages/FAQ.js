import React, { useEffect } from 'react';
import '../components/faq/faq.css';
import FAQs from '../components/faqs/FAQs';
import FAQSlider from '../components/faqSlider/FAQSlider';

const FAQ = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <FAQSlider />
        <FAQs />
    </div>
  )
}

export default FAQ;