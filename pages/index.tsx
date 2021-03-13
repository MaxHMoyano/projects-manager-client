// import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const IndexPage = () => (
  <Layout title='Projects Manager'>
    <Header />
    <main className='flex-1 flex'>
      <Content />
      <Sidebar />
    </main>
  </Layout>
);

export default IndexPage;
