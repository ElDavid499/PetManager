import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonMenuToggle
} from '@ionic/react';
import { 
  folder, 
  list, 
  settings,
  informationCircle,
  home
} from 'ionicons/icons';

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/tab1">
              <IonIcon icon={home} slot="start" />
              <IonLabel>Inicio</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonItem>
            <IonLabel><strong>Gestión</strong></IonLabel>
          </IonItem>

          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/categories">
              <IonIcon icon={folder} slot="start" />
              <IonLabel>Categorías</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/pet-types">
              <IonIcon icon={list} slot="start" />
              <IonLabel>Tipos de Mascotas</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonItem>
            <IonLabel><strong>Configuración</strong></IonLabel>
          </IonItem>

          <IonMenuToggle autoHide={false}>
            <IonItem button>
              <IonIcon icon={settings} slot="start" />
              <IonLabel>Configuración</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle autoHide={false}>
            <IonItem button>
              <IonIcon icon={informationCircle} slot="start" />
              <IonLabel>Acerca de</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
