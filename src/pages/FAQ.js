import React from 'react';
import '../components/faq/faq.css';
import FAQs from '../components/faqs/FAQs';
import FAQSlider from '../components/faqSlider/FAQSlider';

const FAQ = () => {
  return (
    <div>
        <FAQSlider />
        <FAQs />
    </div>
  )
}

export default FAQ;