import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Bienvenida Caris!</h1>
      <br />
      <br />
      <div className="container">
        <p>Un gusto saludarte, soy Mr. Sherlock, Sherlock Holmes.</p>
        <p>
          Antes de empezar a contarte lo que necesito contarte.. Quiero que
          abras el siguiente link y puedas sumergirte en esta aventura:{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=pgLjYsVP4H0&ab_channel=RelaxationHarmony"
          >
            Hace clic aca
          </a>
        </p>
        <p>
          Si bien, puedo descubrir cualquier tipo de casos, ya que no hay nada
          imposible para mi, hoy necesito de tu ayuda{" "}
        </p>
        <p>
          Me llegó el rumor, que dentro de tu casa, hay un tesoro. Pero como
          estoy con covid, no puedo ir a resolverlo. Así que serás la encargada
          de encontrar lo que estamos buscando.
        </p>
        <p>Una vez que termines, hace clic en &apos;Ya encontré todas las pistas&apos;</p>
        <p>
          Mi querido Watson me llamó muy desesperado desde birmingham y me dijo:
          &apos;The first clue is under the table&apos;.
        </p>

        <button className='button_finish'>
          <Link className='button_finish' href="/finish">Ya encontré todas las pistas!</Link>
        </button>
      </div>
    </div>
  )
}
