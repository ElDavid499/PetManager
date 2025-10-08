// src/pages/CategoryRegistration.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
    IonButton, IonIcon, IonList, IonItem, IonLabel, IonInput, IonTextarea,
    IonNote
} from '@ionic/react';
import { arrowBack, save, shirtOutline } from 'ionicons/icons';

const CategoryRegistration: React.FC = () => {
    // Obtiene el ID de la URL para saber si es edición
    const { id } = useParams<{ id: string }>();
    const isEditing = !!id;

    // Estado del formulario
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState<string | null>(null);

    // Simulación de carga de datos para edición (ej: si el ID es 'M-001')
    useEffect(() => {
        if (isEditing && id === 'M-001') {
            setName('Medicamento');
            setDescription('Productos farmacéuticos para tratamiento y prevención.');
            setIcon('medkit');
        } else if (!isEditing) {
            // Limpiar si es registro nuevo
            setName('');
            setDescription('');
            setIcon(null);
        }
    }, [isEditing, id]);

    const handleSave = () => {
        console.log(isEditing ? 'Guardando Categoría' : 'Creando Categoría', { name, description });
        // Aquí iría la llamada a la API de creación/edición
        alert(isEditing ? 'Categoría actualizada.' : 'Categoría creada.');
        // Opcional: Redirigir a la lista de categorías
    };

    const headerTitle = isEditing ? 'Editar Categoría' : 'Nueva Categoría';

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons slot="start">
                        {/* Asumimos que la lista de categorías está en /categories/list */}
                        <IonButton routerLink="/categories/list">
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
                        <IonLabel position="stacked">Nombre de la Categoría (*)</IonLabel>
                        <IonInput
                            value={name}
                            placeholder="Ej: Alimento, Accesorios, Medicamento"
                            onIonChange={e => setName(e.detail.value!)}
                            required
                        />
                    </IonItem>

                    {/* Descripción */}
                    <IonItem>
                        <IonLabel position="stacked">Descripción (Opcional)</IonLabel>
                        <IonTextarea
                            value={description}
                            placeholder="Breve descripción del tipo de productos..."
                            rows={3}
                            onIonChange={e => setDescription(e.detail.value!)}
                        />
                    </IonItem>

                    {/* Icono Representativo */}
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
                            onClick={() => alert('Simulador: Seleccionando Ícono/Imagen')}
                        >
                            {/* Muestra el ícono seleccionado o uno por defecto */}
                            {icon ? (
                                <IonIcon icon={icon} size="large" color="primary" />
                            ) : (
                                <IonIcon icon={shirtOutline} size="large" color="medium" />
                            )}
                            <p>{icon ? `Ícono seleccionado: ${icon}` : 'Haga clic para seleccionar Ícono'}</p>
                            <IonNote>Usado para identificar la categoría en las listas.</IonNote>
                        </div>
                    </IonItem>

                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default CategoryRegistration;