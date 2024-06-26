import React, { useEffect, useState} from 'react'
import HomeImg from "../assets/images/Group.png";
import "./main.scss";
import Image from "../assets/images/IMAGEhime.png";
import buildImage from "../assets/images/IMAGE (1).png";
import zavodImage from "../assets/images/IMAGE (1).png";
import { useTranslation } from 'react-i18next';
import firstImg from "../assets/images/IMAGE.png";
import secondImg from "../assets/images/IMAGE (1).png";
import thirdImg from "../assets/images/IMAGE (2).png";


export default function Home() {
    
    const [articles, setArticles] = useState([]);
    const [loading,setLoading] = useState(false);   
    const {t} = useTranslation();

  
   const SendMessage = (event) =>{
    event.preventDefault();
    setLoading(true); 
    const token = "6949737795:AAFpmhCniHK_L7k4Cs6Oz6bVyN_XmaijV7U";
    const chat_id = -1002141563898;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const adress = document.getElementById("adress").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const dataService = document.getElementById("dataService").value;
    const textarea = document.getElementById("textarea").value;
    const messageContent = `Ismi: ${name} \nTelefon raqami: ${number}\n Adress: ${adress}\n Email manzil: ${email}\n Servis xizmat${service}\n Sana: ${dataService} \n Takliflar: ${textarea}`;

    if (!name || !number || !email || !adress || !service || !dataService || !textarea ) {
      alert("Malumotlarni to`ldiring!!!");
      setLoading(false);
      return;
  }
  console.log("Message content:", messageContent);


    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: messageContent,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to send message');
        }
        document.getElementById("myForm").reset();
        alert("Muvaffaqiyatli yuborildi");
      })
      .catch((error) => {
        console.log("Yuborishda xatolik", error);
      })
      .finally(() => {
        setLoading(false); // Set loading state back to false when the process is complete
      });
  }


    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2577c59299a14d2eaca38a5502b8b92e")
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to fetch');
            }
            return res.json();
          })
          .then((data) => {
            const topArticles = data?.articles.slice(8, 11);
            setArticles(topArticles);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

  return (
    <div>
        <div className="home container" id="home">
            <div className="home_left">
            <h1 className="home_title" 
                data-aos="fade-right">
                {t("home.homeTitle")}
            </h1>
            <p className="home_info">
                    {t("home.homeInfo")}
            </p>
            <button className="home_btn" 
                data-aos="fade-right">{t("home.homebtn")}</button>
            </div>
            <div className="home_right">
                <img className="home-image" src={HomeImg}/> 
            </div>
      </div>

    <div className='about container'>
      <h2>About Us</h2>
      <p className='aboutInfo'>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br/> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
      <div className='about-cards row'>
        <div className='col'>
          <img src={firstImg} />
          <h2>1. Schedule online</h2>
          <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
        </div>
        <div className='col'>
          <img src={secondImg} />
          <h2>2. Pay online easily</h2>
          <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
        </div>
        <div className='col'>
          <img src={thirdImg} />
          <h2>3. Get your house cleaned</h2>
          <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
        </div>
      </div>
    </div>
    
      <div className='contact' id='connect'>
        <div className='container contact-fluid'>
            <div className="contact-left container col">
                <h4 className='contact-title'>{t("contact.contactTitle")}</h4>
                <p className='contact-info'>{t("contact.contactInfo")}</p>
                <h3 className='contact-title'>
                  {t("contact.contactTitleSecond")}
                </h3>
                <p className='contact-info'>{t("contact.contactInfoSecond")}</p>
                <button type='submit' className='contact-btn btn'>{t("contact.contactButton")}</button>
                        
            </div>
            <div className="contact-right col">
                <form id="myForm" onSubmit={SendMessage}>
                    <div class="row">
                        <div class="col form-group">
                            <label className="w3-text-teal"><b>{t("contact.fullname")}</b></label>
                            <input className=" form-control w3-input w3-border w3-light-grey" id="name" type="text" />
                        </div>
                        <div class="col form-group">
                            <label className="w3-text-teal"><b>{t("contact.number")}</b></label>
                            <input className=" form-control w3-input w3-border w3-light-grey" id='number' type="number" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col form-group">
                            <label className="w3-text-teal"><b>{t("contact.address")}</b></label>
                            <input id="adress" className="form-control w3-input w3-border w3-light-grey" type="text" />
                        </div>
                        <div class="col form-group">
                            <label className="w3-text-teal"><b>{t("contact.email")}</b></label>
                            <input id='email' className=" form-control w3-input w3-border w3-light-grey" type="email" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col form-group">
                            <label className="w3-text-teal"><b>{t("contact.service")}</b></label>
                            <input id='service' className=" form-control w3-input w3-border w3-light-grey" type="text" />
                        </div>
                        <div class="col form-group">
                            <label className="w3-text-teal"><b>{t("contact.dayService")}</b></label>
                            <input id='dataService' className=" form-control w3-input w3-border w3-light-grey" type="text" />
                        </div>
                    </div>

                    <label className='text-label' for="textarea">{t("contact.textarea")}</label>
                    <textarea  className='form-textarea form-control' id='textarea'>Some text</textarea>

                    <button className='submit btn text-white' type='submit' loading={loading}>{loading?"Yuborilmoqda...": t("contact.sendButton")}</button>
                </form>
            </div>
        </div>
        </div>


        <div className='services'>
            <div className='head-services container'>
                <h2>Our Services</h2>
                <button className='services-btn btn'>Explore services</button>
            </div>
            
            <div className='service-full'>
              <div className='container service-cards'>
                {articles.map((article, index) => (
                  <div className='service' key={index}>
                      <img className='service_img' src={Image} alt="error"/>
                      <h3 className='service-title'>{article.author ? article.author.slice(0, 10) : 'Author not available'}</h3>
                      <p className='service-info'>{article.description ? article.description.slice(0, 100) : ''}</p>
                  </div>
                  ))}
              </div>
            </div>
            
        </div>
    </div>
  )
}
