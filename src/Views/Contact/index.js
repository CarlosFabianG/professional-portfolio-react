import React from 'react'

function Contact(){
    return(
        <>
        <section class="contact-section-1">
            <div class="title">
                <h3>Get in Touch</h3>
            </div>
      
            <article>
                <div class="text">
                I’d love to hear about what you’re working on and how I could help. I’m currently 
                looking for a new role and am open to a wide range of opportunities. My preference 
                would be to find a position in a company in London. But I’m also happy to hear about 
                opportunites that don’t fit that description. I’m a hard-working and positive person 
                who will always approach each task with a sense of purpose and attention to detail. 
                Please do feel free to check out my online profiles below and get in touch using the form.
                <div class="icons">
                    <a>
                    <img src="images/icons/github-2.svg" />
                    </a>
                    <a>
                    <img src="images/icons/twitter-2.svg" />
                    </a>
                    <a>
                    <img src="images/icons/linkedin-2.svg" />
                    </a>
                </div>
                </div>
            </article>
    </section>

    <section class="contact-section-2">
      <div class="title">
        <h3>Contact Me</h3>
      </div>

      <div class="form">
        <form>
          <label>Name</label>
          <input class="input-medium" placeholder="Jane Appleseed" />
  
          <label>Email Address</label>
          <input class="input-medium" placeholder="email@example.com" />
  
          <label>Message</label>
          <input class="input-large" placeholder="How can I help?" />
  
          <button>Send Message</button>
        </form>
      </div>
  
    </section>
        </>
    )
}

export default Contact