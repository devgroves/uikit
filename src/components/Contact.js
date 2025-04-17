import React from 'react';
import { Link } from 'react-scroll';
import { useForm } from 'react-hook-form';

const Contact = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
  };
  return (
      <section id="contact" className="uk-section"style={{ paddingTop: '40px' }} >
      
      <div className="uk-container">
        
        <div 
          className="uk-flex uk-flex-between uk-flex-middle" 
          uk-grid
          uk-margin-medium-top
          style={{
            flexDirection: window.innerWidth >= 960 ? 'row' : 'column'
          }}
        >
       
          <div className="uk-width-1-2@m uk-width-1-1">
            <div className="uk-text-center">
              <img 
                src="https://devgrovestechnologies.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontactus.e52b99de.png&w=1200&q=75" 
                alt="DevGroves Technologies"
                className="uk-border-rounded uk-box-shadow-medium"
                style={{ 
                  maxWidth: '100%',
                 objectFit: 'contain',
                  maxHeight: '350px'
                }}
              />
            </div>
          </div>

       
          <div className="uk-width-1-2@m uk-width-1-1">
                       <form onSubmit={handleSubmit(onSubmit)} className="uk-form-stacked">
              
              <div className="uk-margin">
                <label className="uk-form-label">Please share a minute to fill in..</label>
              </div>
              
              <div className="uk-margin">
                <label className="uk-form-label">Your name please..</label>
                <div className="uk-form-controls">
                  <input 
                    className="uk-input" 
                    type="text" 
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="uk-text-danger">This field is required</span>}
                </div>
              </div>
              
              <div className="uk-grid-small" uk-grid>
                <div className="uk-width-1-2@s">
                  <div className="uk-margin">
                    <label className="uk-form-label">Contact number</label>
                    <div className="uk-form-controls">
                      <input 
                        className="uk-input" 
                        type="tel" 
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && <span className="uk-text-danger">This field is required</span>}
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-2@s">
                  <div className="uk-margin">
                    <label className="uk-form-label">Email Id...</label>
                    <div className="uk-form-controls">
                      <input 
                        className="uk-input" 
                        type="email" 
                        {...register("email", { required: true })}
                      />
                      {errors.email && <span className="uk-text-danger">This field is required</span>}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="uk-margin">
                <label className="uk-form-label">Choose File</label>
                <div className="uk-form-controls">
                  <div uk-form-custom="target: true">
                    <input type="file" {...register("file")} />
                    <input 
                      className="uk-input" 
                      type="text" 
                      placeholder="No file chosen" 
                      disabled 
                    />
                  </div>
                </div>
              </div>
              
              <div className="uk-margin">
                <label className="uk-form-label">Please drop in your questions..</label>
                <div className="uk-form-controls">
                  <textarea 
                    className="uk-textarea" 
                    rows="5" 
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors.message && <span className="uk-text-danger">This field is required</span>}
                </div>
              </div>
              
              <div className="uk-margin">
                <button className="uk-button uk-button-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        <div className="uk-divider-icon"></div>
    </section>
    
  );
};

export default Contact;