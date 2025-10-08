// src/components/MainTabs.tsx

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { people, cube, paw, menu, list } from 'ionicons/icons';

// Importa las páginas de las pestañas
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';

const MainTabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                {/* Rutas de Contenido de Pestañas */}
                <Route path="/tab1" component={Tab1} exact={true} />
                <Route path="/tab2" component={Tab2} exact={true} />
                <Route path="/tab3" component={Tab3} exact={true} />

                {/* Redirección dentro de la estructura de tabs (si alguien navega a /tab) */}
                <Route exact path="/tab" render={() => <Redirect to="/tab1" />} />
            </IonRouterOutlet>

            {/* BARRA DE NAVEGACIÓN INFERIOR */}
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                    <IonIcon icon={people} />
                    <IonLabel>Usuarios</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <IonIcon icon={cube} />
                    <IonLabel>Productos</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon icon={paw} />
                    <IonLabel>Mascotas</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default MainTabs;