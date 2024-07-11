import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from './Content';
import AllTires from './pages/allTires/AllTires';
import CreateTire from './pages/createTire/CreateTire';
import Filter from './pages/filterTires/Filter';
import { SignInForm } from './pages/signInPage';
import { RegistrationForm } from './pages/registrationPage';
import { TireComponent } from './pages/tireDetailPage/tireDetailPage';
import NewsList from './pages/newsPage/allnews';
import Cart from './pages/cart/Cart';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Content>
            <Routes>
              <Route path="/" element={<Filter />} />
              <Route path="/all" element={<AllTires />} />
              <Route path="/create" element={<CreateTire />} />
              <Route path="/signIn" element={<SignInForm />} />
              <Route path="/registration" element={<RegistrationForm />} />
              <Route path="/filter/:query" element={<Filter />} />
              <Route path="/tireDetail" element={<TireComponent id={19} />} />
              <Route path="/allnews" element={<NewsList />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
