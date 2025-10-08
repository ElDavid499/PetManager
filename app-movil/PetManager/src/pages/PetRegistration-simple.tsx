import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonList,
  IonTextarea
} from '@ionic/react';

const PetRegistrationSimple: React.FC = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    console.log('Datos de Mascota:', { name, breed, age, sex, notes });
    alert('Mascota registrada exitosamente');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab3" />
          </IonButtons>
          <IonTitle>Registrar Mascota</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ padding: '16px' }}>
          <h2>Registro de Mascota</h2>
          
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Nombre *</IonLabel>
              <IonInput
                value={name}
                onIonInput={(e) => setName(e.detail.value!)}
                placeholder="Nombre de la mascota"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Raza</IonLabel>
              <IonInput
                value={breed}
                onIonInput={(e) => setBreed(e.detail.value!)}
                placeholder="Raza de la mascota"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Edad</IonLabel>
              <IonInput
                type="number"
                value={age}
                onIonInput={(e) => setAge(e.detail.value!)}
                placeholder="Edad en años"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Sexo</IonLabel>
              <IonSelect
                value={sex}
                onIonChange={(e) => setSex(e.detail.value)}
                placeholder="Seleccione el sexo"
              >
                <IonSelectOption value="Macho">Macho</IonSelectOption>
                <IonSelectOption value="Hembra">Hembra</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Notas</IonLabel>
              <IonTextarea
                value={notes}
                onIonInput={(e) => setNotes(e.detail.value!)}
                placeholder="Notas adicionales"
                rows={3}
              />
            </IonItem>
          </IonList>

          <IonButton
            expand="block"
            onClick={handleSave}
            style={{ marginTop: '20px' }}
          >
            Guardar Mascota
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PetRegistrationSimple;
