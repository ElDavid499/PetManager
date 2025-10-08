// src/pages/PetDetail.tsx

import React from 'react';
import { useParams } from 'react-router';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
    IonButton, IonIcon, IonText, IonList, IonItem, IonLabel, IonNote,
    IonGrid, IonRow, IonCol, IonChip, IonAvatar
} from '@ionic/react';
import { arrowBack, create, trash, calendar, heart, medkit } from 'ionicons/icons';

// Tipo de dato para la Mascota (simulación)
interface Pet {
    id: string;
    name: string;
    owner: string;
    specie: string;
    breed: string;
    age: number;
    weight: number;
    microchip: string;
    image: string;
}

// Datos de prueba (simulación)
const samplePets: Pet[] = [
    {
        id: '1',
        name: 'Max',
        owner: 'Carlos Mendoza',
        specie: 'Perro',
        breed: 'Golden Retriever',
        age: 5,
        weight: 32.5,
        microchip: 'ABC-12345',
        image: 'https://i.pravatar.cc/150?img=1',
    },
    // ... más mascotas ...
];

const PetDetail: React.FC = () => {
    // Captura el ID de la URL
    const { id } = useParams<{ id: string }>();

    // Simula la obtención de la mascota
    const pet = samplePets.find(p => p.id === id);

    if (!pet) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar><IonTitle>Error</IonTitle></IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <p>Mascota no encontrada.</p>
                </IonContent>
            </IonPage>
        );
    }

    // Asumiendo que la ruta de regreso es la lista de mascotas (Tab3)
    const backLink = '/tab3';

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink={backLink} slot="start">
                            <IonIcon icon={arrowBack} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Detalles de {pet.name}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton routerLink={`/pets/edit/${pet.id}`} color="primary">
                            <IonIcon icon={create} slot="icon-only" />
                        </IonButton>
                        <IonButton color="danger">
                            <IonIcon icon={trash} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                {/* Cabecera con Avatar */}
                <div className="ion-padding ion-text-center">
                    <IonAvatar style={{ width: '100px', height: '100px', margin: '0 auto' }}>
                        <img src={pet.image} alt={`Foto de ${pet.name}`} />
                    </IonAvatar>
                    <h1 className="ion-margin-top">{pet.name}</h1>
                    <IonChip color="primary">{pet.specie} - {pet.breed}</IonChip>
                </div>

                {/* Grid de Información Médica */}
                <IonGrid className="ion-padding-horizontal">
                    <IonRow>
                        <IonCol size="4" className="ion-text-center">
                            <IonIcon icon={heart} size="large" color="danger" />
                            <p>Peso: {pet.weight} kg</p>
                        </IonCol>
                        <IonCol size="4" className="ion-text-center">
                            <IonIcon icon={calendar} size="large" color="warning" />
                            <p>Edad: {pet.age} años</p>
                        </IonCol>
                        <IonCol size="4" className="ion-text-center">
                            <IonIcon icon={medkit} size="large" color="success" />
                            <p>ID Chip: {pet.microchip}</p>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* Lista de Información General */}
                <IonList lines="full" className="ion-margin-top">
                    <IonItem>
                        <IonLabel>Dueño</IonLabel>
                        <IonNote slot="end">{pet.owner}</IonNote>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Especie</IonLabel>
                        <IonNote slot="end">{pet.specie}</IonNote>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Raza</IonLabel>
                        <IonNote slot="end">{pet.breed}</IonNote>
                    </IonItem>
                    <IonItem button routerLink={`/pets/history/${pet.id}`} detail>
                        <IonLabel>Historial Médico</IonLabel>
                        <IonNote slot="end">Ver citas y vacunas</IonNote>
                    </IonItem>
                </IonList>

                <div className="ion-padding-vertical">
                    <IonButton expand="block" routerLink={`/pets/edit/${pet.id}`}>
                        Editar Información de {pet.name}
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PetDetail;