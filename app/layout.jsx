import '@styles/global.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'PromptCOM',
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
              </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout