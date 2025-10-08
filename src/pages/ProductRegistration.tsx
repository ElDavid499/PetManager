// src/pages/ProductRegistration.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
    IonButton, IonIcon, IonList, IonItem, IonLabel, IonInput, IonNote, IonTextarea,
    IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonText, IonRadioGroup, IonRadio
} from '@ionic/react';
import { arrowBack, imageOutline, close } from 'ionicons/icons';

// Tipos de datos de simulación
const categories = ['Alimento', 'Medicamento', 'Accesorio', 'Higiene'];
const animalTypes = ['Perros', 'Gatos', 'Aves', 'Reptiles'];

const ProductRegistration: React.FC = () => {
    // Captura el ID de la URL para saber si es edición
    const { id } = useParams<{ id: string }>();
    const isEditing = !!id;

    // Estado del formulario
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [animal, setAnimal] = useState<string[]>([]);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState<number | string>('');
    const [stock, setStock] = useState<number | string>('');
    const [image, setImage] = useState<string | null>(null);

    // Simulación de carga de datos para edición
    useEffect(() => {
        if (isEditing) {
            // Lógica para cargar los datos del producto con 'id'
            // Solo para simular
            setName('Alimento Premium');
            setCategory('Alimento');
            setAnimal(['Perros', 'Gatos']);
            setPrice(54.99);
            setStock(150);
            setImage('https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&h=400&fit=crop&q=80');
        } else {
            // Limpiar el formulario si es creación
            setName('');
            // etc...
        }
    }, [isEditing, id]);

    const handleSave = () => {
        console.log(isEditing ? 'Guardando cambios' : 'Creando producto', { name, price, stock });
        // Lógica de validación y API call aquí
        alert(isEditing ? 'Producto actualizado.' : 'Producto creado.');
        // Aquí se redirigiría a la vista de detalle o a la lista
    };

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons slot="start">
                        {/* Navegación al módulo Tab2 */}
                        <IonButton routerLink="/tab2">
                            <IonIcon icon={arrowBack} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{isEditing ? 'Editar Producto' : 'Nuevo Producto'}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-padding">
                <IonList lines="full">

                    {/* Nombre */}
                    <IonItem>
                        <IonLabel position="stacked">Nombre (*)</IonLabel>
                        <IonInput
                            value={name}
                            placeholder="Ingrese nombre"
                            onIonChange={e => setName(e.detail.value!)}
                            required
                        />
                    </IonItem>

                    {/* Categoría (Módulo 5) */}
                    <IonItem>
                        <IonLabel position="stacked">Categoría (*)</IonLabel>
                        <IonSelect
                            value={category}
                            placeholder="Seleccione categoría"
                            onIonChange={e => setCategory(e.detail.value!)}
                            required
                        >
                            {categories.map(cat => (
                                <IonSelectOption key={cat} value={cat}>{cat}</IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonItem>

                    {/* Tipo de Animal (Puede ser múltiple) */}
                    <IonItem>
                        <IonLabel position="stacked">Tipo de Animal</IonLabel>
                        <IonSelect
                            multiple
                            value={animal}
                            placeholder="Seleccione tipos de animal"
                            onIonChange={e => setAnimal(e.detail.value!)}
                        >
                            {animalTypes.map(type => (
                                <IonSelectOption key={type} value={type}>{type}</IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonItem>

                    {/* Descripción */}
                    <IonItem>
                        <IonLabel position="stacked">Descripción</IonLabel>
                        <IonTextarea
                            value={description}
                            placeholder="Ingrese descripción (opcional)"
                            rows={3}
                            onIonChange={e => setDescription(e.detail.value!)}
                        />
                    </IonItem>

                    {/* Precio y Stock en Grid */}
                    <IonGrid>
                        <IonRow>
                            <IonCol size="6">
                                <IonItem lines="none">
                                    <IonLabel position="stacked">Precio (*)</IonLabel>
                                    <IonInput
                                        type="number"
                                        value={price}
                                        placeholder="0.00"
                                        onIonChange={e => setPrice(e.detail.value!)}
                                        required
                                    />
                                </IonItem>
                            </IonCol>
                            <IonCol size="6">
                                <IonItem lines="none">
                                    <IonLabel position="stacked">Stock (*)</IonLabel>
                                    <IonInput
                                        type="number"
                                        value={stock}
                                        placeholder="0"
                                        onIonChange={e => setStock(e.detail.value!)}
                                        required
                                    />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    {/* Imagen del Producto */}
                    <IonItem lines="full">
                        <IonLabel position="stacked">Imagen del Producto</IonLabel>
                        {image ? (
                            <div className="ion-padding-vertical" style={{ position: 'relative' }}>
                                <img src={image} alt="Producto" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
                                <IonButton fill="clear" color="danger" onClick={() => setImage(null)} style={{ position: 'absolute', top: 5, right: 5 }}>
                                    <IonIcon icon={close} slot="icon-only" />
                                </IonButton>
                            </div>
                        ) : (
                            <div
                                className="ion-padding ion-text-center"
                                style={{ border: '2px dashed var(--ion-color-medium)', borderRadius: '8px', width: '100%', cursor: 'pointer', marginTop: '10px' }}
                            >
                                <IonIcon icon={imageOutline} size="large" color="medium" />
                                <p>Arrastra o haz clic para subir una imagen</p>
                                <IonNote>PNG, JPG hasta 5MB</IonNote>
                            </div>
                        )}
                    </IonItem>

                </IonList>

                {/* Botón de acción */}
                <div className="ion-padding">
                    <IonButton expand="block" onClick={handleSave} color="success">
                        {isEditing ? 'Guardar Cambios' : 'Crear Producto'}
                    </IonButton>
                    <IonButton expand="block" fill="clear" color="danger" routerLink="/tab2">
                        Cancelar
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ProductRegistration;