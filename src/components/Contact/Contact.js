import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formspree.io/phungpham@outlook.com"
          method="POST"
        >
          <div>
            <lable htmlFor="name">Name</lable>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="phung pham"
            />
          </div>
          <div>
            <lable htmlFor="name">Email</lable>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <lable htmlFor="name">Message</lable>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="hello there"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
