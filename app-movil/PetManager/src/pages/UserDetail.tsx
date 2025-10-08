import React from 'react';
import { useParams } from 'react-router-dom';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
    IonBackButton, IonIcon, IonButton, IonList, IonItem, IonLabel,
    IonText, IonAvatar, IonGrid, IonRow, IonCol
} from '@ionic/react';
import { createOutline } from 'ionicons/icons';

// Datos simulados para demostración (los datos reales vendrían de una API)
const MOCK_USERS = [
    { id: '1', name: 'Carlos Mendoza', email: 'carlos.mendoza@example.com', role: 'Administrador', status: 'Activo', creationDate: '15 de enero de 2023', lastMod: '20 de mayo de 2024', avatar: 'https://i.pravatar.cc/150?img=68' },
    { id: '2', name: 'Sofia Ramirez', email: 'sofia.ramirez@example.com', role: 'Veterinario', status: 'Activo', creationDate: '10 de febrero de 2023', lastMod: '1 de junio de 2024', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: '3', name: 'Diego Vargas', email: 'diego.vargas@example.com', role: 'Asistente', status: 'Inactivo', creationDate: '5 de marzo de 2023', lastMod: '25 de abril de 2024', avatar: 'https://i.pravatar.cc/150?img=52' },
];

const UserDetail: React.FC = () => {
    // Captura el ID del usuario desde la URL (React Router)
    const { id } = useParams<{ id: string }>();
    const user = MOCK_USERS.find(u => u.id === id);

    if (!user) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start"><IonBackButton defaultHref="/tab1" /></IonButtons>
                        <IonTitle>Error</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonText color="danger"><h1>Usuario no encontrado</h1></IonText>
                </IonContent>
            </IonPage>
        );
    }

    // Vista de detalle con el formato del diseño [cite: 85]
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tab1" />
                    </IonButtons>
                    <IonTitle>Detalles del Usuario</IonTitle>
                    <IonButtons slot="end">
                        {/* BOTÓN FUNCIONAL: Navega a la ruta de edición (HU 1.4) */}
                        <IonButton color="primary" routerLink={`/users/edit/${user.id}`}>
                            <IonIcon icon={createOutline} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {/* Cabecera con Avatar */}
                <IonGrid className="ion-padding-vertical ion-text-center">
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12">
                            <IonAvatar style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                                <img src={user.avatar} alt="Foto de Perfil" />
                            </IonAvatar>
                            <h2>{user.name}</h2>
                            <IonText color="medium"><p>{user.email}</p></IonText>
                            <IonText color="success"><p>{user.role} - {user.status}</p></IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonList lines="none" className="ion-margin-top">
                    <IonItem detail={false}>
                        <IonLabel>
                            <h3>Información del Usuario</h3>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Nombre Completo</IonLabel>
                        <IonText slot="end">{user.name}</IonText>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Correo Electrónico</IonLabel>
                        <IonText slot="end">{user.email}</IonText>
                    </IonItem>
                    {/* ... Más campos de detalle ... */}
                </IonList>

            </IonContent>
        </IonPage>
    );
};

export default UserDetail;