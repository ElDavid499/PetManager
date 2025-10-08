// src/pages/PetTypeRegistration.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
    IonButton, IonIcon, IonList, IonItem, IonLabel, IonInput, IonTextarea,
    IonNote
} from '@ionic/react';
import { arrowBack, imageOutline, save } from 'ionicons/icons';

const PetTypeRegistration: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const isEditing = !!id;

    // Estado del formulario
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState<string | null>(null); // Simulación de selección de ícono

    // Simulación de carga de datos para edición (ejemplo de "Gato")
    useEffect(() => {
        if (isEditing && id === '2') {
            setName('Gato');
            setDescription('Felino doméstico, común en hogares.');
            // Aquí se cargaría el icono actual
        } else if (!isEditing) {
            setName('');
            setDescription('');
            setIcon(null);
        }
    }, [isEditing, id]);

    const handleSave = () => {
        console.log(isEditing ? 'Guardando Tipo' : 'Creando Tipo', { name, description });
        alert(isEditing ? 'Tipo de Mascota actualizado.' : 'Tipo de Mascota creado.');
        // Redirigir a la lista de Tipos
    };

    const headerTitle = isEditing ? 'Editar Tipo de Mascota' : 'Nuevo Tipo de Mascota';

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/pet-types"> {/* Asumimos una ruta para la lista de tipos */}
                            <IonIcon icon={arrowBack} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{headerTitle}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleSave} color="success">
                            <IonIcon icon={save} slot="start" />
                            {isEditing ? 'Guardar' : 'Crear'}
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-padding">
                <IonList lines="full">

                    {/* Nombre */}
                    <IonItem>
                        <IonLabel position="stacked">Nombre del Tipo (*)</IonLabel>
                        <IonInput
                            value={name}
                            placeholder="Ej: Perro, Gato, Reptil..."
                            onIonChange={e => setName(e.detail.value!)}
                            required
                        />
                    </IonItem>

                    {/* Descripción */}
                    <IonItem>
                        <IonLabel position="stacked">Descripción (Opcional)</IonLabel>
                        <IonTextarea
                            value={description}
                            placeholder="Descripción del tipo de animal..."
                            rows={2}
                            onIonChange={e => setDescription(e.detail.value!)}
                        />
                    </IonItem>

                    {/* Icono del Tipo */}
                    <IonItem lines="full">
                        <IonLabel position="stacked">Icono Representativo</IonLabel>

                        {/* Simulación de selección de iconos/imagen */}
                        <div
                            className="ion-padding ion-text-center ion-margin-top"
                            style={{
                                border: '2px dashed var(--ion-color-medium)',
                                borderRadius: '8px',
                                width: '100%',
                                cursor: 'pointer'
                            }}
                            onClick={() => alert('Abrir selector de iconos (HU 3.2)')}
                        >
                            <IonIcon icon={imageOutline} size="large" color="medium" />
                            <p>Seleccionar un Icono</p>
                            <IonNote>Selecione el icono que represente a este tipo de mascota.</IonNote>
                        </div>
                    </IonItem>

                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default PetTypeRegistration;