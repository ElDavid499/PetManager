// src/pages/PetRegistration.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
    IonButton, IonIcon, IonList, IonItem, IonLabel, IonInput, IonTextarea,
    IonSelect, IonSelectOption, IonDatetime, IonGrid, IonRow, IonCol, IonNote
} from '@ionic/react';
import { arrowBack, calendarOutline, close } from 'ionicons/icons';

// Datos de prueba (simulación)
const species = ['Perro', 'Gato', 'Ave', 'Reptil'];
const owners = [
    { id: '1', name: 'Carlos Mendoza' },
    { id: '2', name: 'Sofía Ramírez' }
];

const PetRegistration: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const isEditing = !!id;

    // Estado del formulario
    const [name, setName] = useState('');
    const [specie, setSpecie] = useState('');
    const [breed, setBreed] = useState('');
    const [dob, setDob] = useState<string | undefined>(undefined); // Date of Birth
    const [sex, setSex] = useState('');
    const [color, setColor] = useState('');
    const [ownerId, setOwnerId] = useState('');
    const [notes, setNotes] = useState('');

    // Simulación de carga de datos para edición (ejemplo de Max)
    useEffect(() => {
        if (isEditing && id === '1') {
            setName('Max');
            setSpecie('Perro');
            setBreed('Golden Retriever');
            setDob('2020-05-15T00:00:00');
            setSex('Macho');
            setColor('Dorado');
            setOwnerId('1');
            setNotes('Vacunas al día. Alergia al polen.');
        } else if (!isEditing) {
            // Limpiar el formulario si es creación
            setName('');
            setDob(undefined);
            // ... otros campos
        }
    }, [isEditing, id]);

    const handleSave = () => {
        console.log(isEditing ? 'Guardando cambios de Mascota' : 'Registrando Mascota', { name, specie, ownerId });
        // Lógica de validación y API call aquí
        alert(isEditing ? 'Mascota actualizada.' : 'Mascota registrada.');
        // Redirigir a la lista o al detalle
    };

    const headerTitle = isEditing ? 'Editar Mascota' : 'Nueva Mascota';

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/tab3">
                            <IonIcon icon={arrowBack} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{headerTitle}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-padding">
                <IonList lines="full">

                    {/* Nombre */}
                    <IonItem>
                        <IonLabel position="stacked">Nombre de la Mascota (*)</IonLabel>
                        <IonInput
                            value={name}
                            placeholder="Ingrese nombre"
                            onIonChange={e => setName(e.detail.value!)}
                            required
                        />
                    </IonItem>

                    {/* Especie */}
                    <IonItem>
                        <IonLabel position="stacked">Especie (*)</IonLabel>
                        <IonSelect
                            value={specie}
                            placeholder="Seleccionar"
                            onIonChange={e => setSpecie(e.detail.value!)}
                            required
                        >
                            {species.map(s => (
                                <IonSelectOption key={s} value={s}>{s}</IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonItem>

                    {/* Raza */}
                    <IonItem>
                        <IonLabel position="stacked">Raza</IonLabel>
                        <IonInput
                            value={breed}
                            placeholder="Ingrese raza"
                            onIonChange={e => setBreed(e.detail.value!)}
                        />
                    </IonItem>

                    {/* Fecha de Nacimiento */}
                    <IonItem>
                        <IonLabel position="stacked">Fecha de Nacimiento</IonLabel>
                        <IonDatetime
                            // Propiedad corregida: usamos presentation="date" en lugar de displayFormat
                            presentation="date"

                            // Aseguramos que el valor es una cadena o nulo, no undefined
                            value={dob || ''}

                            // Corregimos la función de cambio para manejar el valor como string
                            onIonChange={e => setDob(e.detail.value as string)}

                            min="2000-01-01"
                            max="2030-12-31"
                        >
                            <IonIcon icon={calendarOutline} slot="end" />
                        </IonDatetime>
                    </IonItem>

                    {/* Sexo y Color en Grid */}
                    <IonGrid className="ion-no-padding">
                        <IonRow>
                            {/* Sexo */}
                            <IonCol size="6">
                                <IonItem lines="none">
                                    <IonLabel position="stacked">Sexo</IonLabel>
                                    <IonSelect
                                        value={sex}
                                        placeholder="Seleccionar"
                                        onIonChange={e => setSex(e.detail.value!)}
                                    >
                                        <IonSelectOption value="Macho">Macho</IonSelectOption>
                                        <IonSelectOption value="Hembra">Hembra</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                            {/* Color */}
                            <IonCol size="6">
                                <IonItem lines="none">
                                    <IonLabel position="stacked">Color</IonLabel>
                                    <IonInput
                                        value={color}
                                        placeholder="Dorado"
                                        onIonChange={e => setColor(e.detail.value!)}
                                    />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    {/* Propietario */}
                    <IonItem>
                        <IonLabel position="stacked">Propietario (*)</IonLabel>
                        <IonSelect
                            value={ownerId}
                            placeholder="Seleccionar Propietario"
                            onIonChange={e => setOwnerId(e.detail.value!)}
                            required
                        >
                            {owners.map(o => (
                                <IonSelectOption key={o.id} value={o.id}>{o.name}</IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonItem>

                    {/* Notas Médicas Iniciales / Actuales */}
                    <IonItem>
                        <IonLabel position="stacked">Notas Médicas Iniciales (Opcional)</IonLabel>
                        <IonTextarea
                            value={notes}
                            placeholder="Escribe aquí..."
                            rows={3}
                            onIonChange={e => setNotes(e.detail.value!)}
                        />
                    </IonItem>

                </IonList>

                {/* Botón de acción */}
                <div className="ion-padding">
                    <IonButton expand="block" onClick={handleSave} color="success">
                        {isEditing ? 'Guardar Cambios' : 'Guardar Mascota'}
                    </IonButton>
                    <IonButton expand="block" fill="clear" color="danger" routerLink={isEditing ? `/pets/${id}` : "/tab3"}>
                        Cancelar
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PetRegistration;