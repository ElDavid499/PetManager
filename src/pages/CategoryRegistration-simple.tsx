import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonItem, IonLabel, IonInput, IonButton, IonList,
  IonTextarea
} from '@ionic/react';

const CategoryRegistrationSimple: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    console.log('Datos de Categoría:', { name, description });
    alert('Categoría registrada exitosamente');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/categories" />
          </IonButtons>
          <IonTitle>Nueva Categoría</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ padding: '16px' }}>
          <h2>Registro de Categoría</h2>
          
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Nombre *</IonLabel>
              <IonInput
                value={name}
                onIonInput={(e) => setName(e.detail.value!)}
                placeholder="Nombre de la categoría"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Descripción</IonLabel>
              <IonTextarea
                value={description}
                onIonInput={(e) => setDescription(e.detail.value!)}
                placeholder="Descripción de la categoría"
                rows={3}
              />
            </IonItem>
          </IonList>

          <IonButton
            expand="block"
            onClick={handleSave}
            style={{ marginTop: '20px' }}
          >
            Guardar Categoría
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CategoryRegistrationSimple;
