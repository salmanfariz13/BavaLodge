import { useState,useRef} from "react";
import {Fade,Zoom,Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



export const Home = () => {

    const slideImages = [
        {
          url: 'https://picsum.photos/200/300',
          caption: 'Image 1',
        },
        {
          url: 'https://source.unsplash.com/400x200/?nature',
          caption: 'Image 2'
        },
        {
          url: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
          caption: 'Image 3'
        }
      ]
    


    const onSubmit = async (event:any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ad3698ab-0e8a-4452-b8e1-d3d6285e0b63");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

       const styling = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'500px',
        backgroundsize:'cover'

       }

       const spanstyle = {
        fontSize:'20px',
        background:'#efefef',
        color:'#000000'
       }
      

      
    
    return (
        <>
               
            <div className="banner">
                <h1>Bava Lodge , Dindigul</h1>
            </div>  
        <div className="totalcontainer">
            <form onSubmit={onSubmit}>
                <h2>Contact form</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder="enter your name" name='name' required/>
                </div>
                <div className="input-box">
                    <label>Email </label>
                    <input type="email" className="field" placeholder="enter your Email Id" name='email'required/>
                </div>
                <div className="input-box">
                    <label>Phone Number </label>
                    <input type="text" className="field" placeholder="enter your Phone Number" name="phone" required/>
                </div>
                <button type="submit">Submit </button>
            </form>
            <div className="Images">
                <Fade>
                    {slideImages.map((image,index)=>(
                        <div key={index}>
                            <div style={{...styling,backgroundImage:`url(${image.url})`}}>
                                <span style={{...spanstyle}}>{image.caption}</span>

                            </div>
                        </div>
                    )
                    )}
                </Fade>
            </div>
        </div>
        </>
    );
};
