
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MainTabs from './components/MainTabs';
import SideMenu from './components/SideMenu';
import UserRegistration from './pages/UserRegistration-simple';
import UserDetail from './pages/UserDetail';
import ProductDetail from './pages/ProductDetail';
import ProductRegistration from './pages/ProductRegistration';
import PetDetail from './pages/PetDetail';
import '@ionic/react/css/core.css';
import './theme/variables.css';
import PetRegistration from './pages/PetRegistration-simple';
import PetTypeRegistration from './pages/PetTypeRegistration';
import CategoryRegistration from './pages/CategoryRegistration-simple';
// Importar las nuevas listas
import UsersList from './pages/UsersList';
import ProductsList from './pages/ProductsList';
import PetsList from './pages/PetsList';
import CategoriesList from './pages/CategoriesList';
import TypesList from './pages/TypesList';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <SideMenu />
      <IonRouterOutlet id="main-content">

        {/* 1. RUTA DE LAS PESTAÑAS: Usar 'render' y NO 'component' para evitar el TypeError. */}
        <Route
          path="/:tab(tab1|tab2|tab3)/"
          render={() => <MainTabs />} // <<-- CORRECCIÓN CLAVE
          exact={false} // Mantener exact en false o quitarlo
        />

        {/* Rutas individuales, como Detalle/Registro, deben ir después de la ruta de pestañas. */}

        {/* Usuarios */}
        <Route path="/users" component={UsersList} exact={true} />
        <Route path="/users/create" component={UserRegistration} exact={true} />
        <Route path="/users/edit/:id" component={UserRegistration} exact={true} />
        <Route path="/users/detail/:id" component={UserDetail} exact={true} />

        {/* Productos */}
        <Route path="/products" component={ProductsList} exact={true} />
        <Route path="/products/create" component={ProductRegistration} exact={true} />
        <Route path="/products/edit/:id" component={ProductRegistration} exact={true} />
        <Route path="/products/detail/:id" component={ProductDetail} exact={true} />

        {/* Mascotas */}
        <Route path="/pets" component={PetsList} exact={true} />
        <Route path="/pets/create" component={PetRegistration} exact={true} />
        <Route path="/pets/edit/:id" component={PetRegistration} exact={true} />
        <Route path="/pets/detail/:id" component={PetDetail} exact={true} />

        {/* Tipos de Mascotas */}
        <Route path="/pet-types" component={TypesList} exact={true} />
        <Route path="/pet-types/create" component={PetTypeRegistration} exact={true} />
        <Route path="/pet-types/edit/:id" component={PetTypeRegistration} exact={true} />

        {/* Categorías de Productos */}
        <Route path="/categories" component={CategoriesList} exact={true} />
        <Route path="/categories/create" component={CategoryRegistration} exact={true} />
        <Route path="/categories/edit/:id" component={CategoryRegistration} exact={true} />

        {/* 3. REDIRECCIÓN DE RAÍZ (Al final) */}
        <Route exact path="/" render={() => <Redirect to="/tab1" />} />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;