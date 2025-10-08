import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonList,
  IonText, IonIcon, IonAvatar, IonRow, IonCol, IonGrid
} from '@ionic/react';
import { imageOutline, camera } from 'ionicons/icons';
import './UserRegistration.css';

const UserRegistration: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'Administrador' | 'Veterinario' | 'Asistente' | ''>('');
  const [status, setStatus] = useState<'Activo' | 'Inactivo'>('Activo');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !role) {
      alert('Por favor, complete todos los campos obligatorios (*).');
      return;
    }
    console.log('Datos de Registro:', { name, email, password, phone, role, status });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Crear Usuario</IonTitle> {/* Título del diseño [cite: 50] */}
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        {/* Sección de Avatar y Foto */}
        <div className="avatar-section">
          <IonAvatar className="profile-avatar">
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Foto de Perfil" />
            <div className="camera-overlay">
              <IonIcon icon={camera} />
            </div>
          </IonAvatar>
          <IonText color="medium">
            <p>Foto (Opcional)</p>
          </IonText>
        </div>

        <form onSubmit={handleRegister}>

          {/* Lista de campos con líneas completas (aspecto más limpio) */}
          <IonList lines="full">

            {/* Nombre Completo (HU 1.3) */}
            <IonItem>
              <IonLabel position="floating">Nombre Completo (*)</IonLabel>
              <IonInput value={name} onIonChange={e => setName(e.detail.value!)} required />
            </IonItem>

            {/* Correo Electrónico (HU 1.3) */}
            <IonItem>
              <IonLabel position="floating">Correo Electrónico (*)</IonLabel>
              <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required />
            </IonItem>

            {/* Contraseña (HU 1.3) */}
            <IonItem>
              <IonLabel position="floating">Contraseña (*)</IonLabel>
              <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} required />
            </IonItem>

            {/* Teléfono */}
            <IonItem>
              <IonLabel position="floating">Teléfono (Opcional)</IonLabel>
              <IonInput type="tel" value={phone} onIonChange={e => setPhone(e.detail.value!)} />
            </IonItem>

            {/* Rol (HU 1.3) */}
            <IonItem>
              <IonLabel position="floating">Rol (*)</IonLabel>
              <IonSelect
                value={role}
                placeholder="Selecciona el Rol"
                onIonChange={e => setRole(e.detail.value!)}
                required
              >
                <IonSelectOption value="Administrador">Administrador</IonSelectOption>
                <IonSelectOption value="Veterinario">Veterinario</IonSelectOption>
                <IonSelectOption value="Asistente">Asistente</IonSelectOption>
              </IonSelect>
            </IonItem>

            {/* Estado (Visible según el diseño) */}
            <IonItem>
              <IonLabel position="floating">Estado (*)</IonLabel>
              <IonSelect
                value={status}
                onIonChange={e => setStatus(e.detail.value!)}
                required
              >
                <IonSelectOption value="Activo">Activo</IonSelectOption>
                <IonSelectOption value="Inactivo">Inactivo</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>

          {/* Botón de Registro */}
          <div className="ion-padding">
            <IonButton expand="block" type="submit" color="success">
              Crear Usuario
            </IonButton>
          </div>

        </form>

      </IonContent>
    </IonPage>
  );
};

export default UserRegistration;