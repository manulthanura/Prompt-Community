import '@styles/global.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';

export const metadata = {
    title: 'Prompt Hub',
    description: 'Community of AI Prompt Ideas',
  }

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
              <div className="main">
                  <div className="gradient" />
              </div>

              <main className="app">
                <Nav />
                {children}
                <Footer />
              </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout