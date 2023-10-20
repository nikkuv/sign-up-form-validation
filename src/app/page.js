import styles from './page.module.css'
import SignUpForm from './components/SignUpForm'

export default function Home() {
  return (
    <main className={styles.main}>
         <div className={styles.grayBackground}>
            <div className={styles.formContainer}>
              <SignUpForm />
            </div>
        </div>
    </main>
  )
}
