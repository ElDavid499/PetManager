import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonList,
  IonText
} from '@ionic/react';

const UserRegistrationSimple: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'Administrador' | 'Veterinario' | 'Asistente' | ''>('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos de Registro:', { name, email, role });
    alert('Usuario registrado exitosamente');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Crear Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ padding: '16px' }}>
          <h2>Registro de Usuario</h2>
          
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Nombre *</IonLabel>
              <IonInput
                value={name}
                onIonInput={(e) => setName(e.detail.value!)}
                placeholder="Ingrese el nombre"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Email *</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonInput={(e) => setEmail(e.detail.value!)}
                placeholder="Ingrese el email"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Rol *</IonLabel>
              <IonSelect
                value={role}
                onIonChange={(e) => setRole(e.detail.value)}
                placeholder="Seleccione un rol"
              >
                <IonSelectOption value="Administrador">Administrador</IonSelectOption>
                <IonSelectOption value="Veterinario">Veterinario</IonSelectOption>
                <IonSelectOption value="Asistente">Asistente</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>

          <IonButton
            expand="block"
            onClick={handleRegister}
            style={{ marginTop: '20px' }}
          >
            Guardar Usuario
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserRegistrationSimple;
