import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Card, Footer } from './components';
import { Carousel } from './components/Carousel';
import { LandingPage, ProjectsPage } from './pages';
import { CardList } from './styles';

function App() {
  let slides = [
    {
      key: 'jipf0',
      content: (
        <Card
          title="Hello world"
          date="Date"
          description="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam commodo nisl, a molestie orci congue sed. In venenatis erat quis mi finibus, dapibus fringilla metus imperdiet. Vivamus malesuada lacus id diam faucibus, id vulputate est tincidunt. Praesent augue odio, euismod eu metus id, dapibus facilisis felis. Pellentesque iaculis dolor ac augue dapibus porttitor vitae nec nulla. Ut eleifend dui a ex porta, vitae sodales massa porta. Pellentesque gravida enim quam, ut porttitor lectus pulvinar id."
          image={{
            uri: 'https://images.unsplash.com/photo-1526223725918-f8c3e767b5e7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            alt: 'Sunrise-reverse',
          }}
          version="0.4.5"
        />
      ),
    },
    {
      key: 'fj0if',
      content: (
        <Card
          title="Hello world"
          date="Date"
          description="
    Lorem ipsum dolor sit amet, consdfbveffweweffweectetur adipiscing elit. Phasellus aliquam commodo nisl, a molestie orci congue sed. In venenatis erat quis mi finibus, dapibus fringilla metus imperdiet. Vivamus malesuada lacus id diam faucibus, id vulputate est tincidunt. Praesent augue odio, euismod eu metus id, dapibus facilisis felis. Pellentesque iaculis dolor ac augue dapibus porttitor vitae nec nulla. Ut eleifend dui a ex porta, vitae sodales massa porta. Pellentesque gravida enim quam, ut porttitor lectus pulvinar id."
          image={{
            uri: 'https://images.unsplash.com/photo-1526223725918-f8c3e767b5e7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            alt: 'Sunrise-reverse',
          }}
          version="0.4.5"
        />
      ),
    },
    {
      key: 'fj0vvsdif',
      content: (
        <Card
          title="Hello world"
          date="Date"
          description="
    Lorem ipsum dolor sit amet, consdfbveffweweffweectetur adipiscing elit. Phasellus aliquam commodo nisl, a molestie orci congue sed. In venenatis erat quis mi finibus, dapibus fringilla metus imperdiet. Vivamus malesuada lacus id diam faucibus, id vulputate est tincidunt. Praesent augue odio, euismod eu metus id, dapibus facilisis felis. Pellentesque iaculis dolor ac augue dapibus porttitor vitae nec nulla. Ut eleifend dui a ex porta, vitae sodales massa porta. Pellentesque gravida enim quam, ut porttitor lectus pulvinar id."
          image={{
            uri: 'https://images.unsplash.com/photo-1526223725918-f8c3e767b5e7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            alt: 'Sunrise-reverse',
          }}
          version="0.4.5"
        />
      ),
    },
    {
      key: 'fj0vvfdssdsdif',
      content: (
        <Card
          title="Hello world"
          date="Date"
          description="
    Lorem ipsum dolor sit amet, consdfbveffweweffweectetur adipiscing elit. Phasellus aliquam commodo nisl, a molestie orci congue sed. In venenatis erat quis mi finibus, dapibus fringilla metus imperdiet. Vivamus malesuada lacus id diam faucibus, id vulputate est tincidunt. Praesent augue odio, euismod eu metus id, dapibus facilisis felis. Pellentesque iaculis dolor ac augue dapibus porttitor vitae nec nulla. Ut eleifend dui a ex porta, vitae sodales massa porta. Pellentesque gravida enim quam, ut porttitor lectus pulvinar id."
          image={{
            uri: 'https://images.unsplash.com/photo-1526223725918-f8c3e767b5e7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            alt: 'Sunrise-reverse',
          }}
          version="0.4.5"
        />
      ),
    },
    {
      key: 'fj0vsfdsdfvsdif',
      content: (
        <Card
          title="Hello world"
          date="Date"
          description="
    Lorem ipsum dolor sit amet, consdfbveffweweffweectetur adipiscing elit. Phasellus aliquam commodo nisl, a molestie orci congue sed. In venenatis erat quis mi finibus, dapibus fringilla metus imperdiet. Vivamus malesuada lacus id diam faucibus, id vulputate est tincidunt. Praesent augue odio, euismod eu metus id, dapibus facilisis felis. Pellentesque iaculis dolor ac augue dapibus porttitor vitae nec nulla. Ut eleifend dui a ex porta, vitae sodales massa porta. Pellentesque gravida enim quam, ut porttitor lectus pulvinar id."
          image={{
            uri: 'https://images.unsplash.com/photo-1526223725918-f8c3e767b5e7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            alt: 'Sunrise-reverse',
          }}
          version="0.4.5"
        />
      ),
    },
  ];

  return (
    <>
      {/* <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/projects" exact component={ProjectsPage} />
      </Switch>
      <Footer /> */}
      <Carousel slides={slides} />
    </>
  );
}

export default App;
