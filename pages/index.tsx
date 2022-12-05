import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';

const withList = (ListComponent) => {
  return null;
}

class Link extends React.Component {
  render() {
    <a href={this.props.link.href}>{this.props.link.text}</a>
  }
}

const linkList = withList(Link);

export default function Home() {
  const list = [{href: "www.google.com", text: "google"}, {href: "https://www.wikipedia.org/", text: "wikipedia"}, {href: "https://www.abc.net.au/news/", text: "abc news"}]


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <linkList list={list} />
      </main>
    </div>
  )
}
