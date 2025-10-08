import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonSearchbar,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButtons,
  IonAvatar,
  IonMenuButton
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { list, create, trash } from 'ionicons/icons';

interface PetType {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

const TypesList: React.FC = () => {
  const [types, setTypes] = useState<PetType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Datos de prueba
  useEffect(() => {
    const mockTypes: PetType[] = [
      {
        id: '1',
        name: 'Perro',
        description: 'Caninos domésticos'
      },
      {
        id: '2',
        name: 'Gato',
        description: 'Felinos domésticos'
      },
      {
        id: '3',
        name: 'Conejo',
        description: 'Lagomorfos domésticos'
      },
      {
        id: '4',
        name: 'Hamster',
        description: 'Roedores pequeños'
      },
      {
        id: '5',
        name: 'Ave',
        description: 'Aves domésticas'
      }
    ];
    setTypes(mockTypes);
  }, []);

  const filteredTypes = types.filter(type =>
    type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    type.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este tipo de mascota?')) {
      setTypes(prev => prev.filter(type => type.id !== id));
    }
  };

  const getTypeColor = (index: number) => {
    const colors = ['primary', 'secondary', 'tertiary', 'success', 'warning'];
    return colors[index % colors.length];
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tipos de Mascotas</IonTitle>
          <IonButtons slot="end">
            <Link to="/pet-types/create">
              <IonButton fill="solid" color="primary">
                <IonIcon icon={list} slot="start" />
                Nuevo Tipo
              </IonButton>
            </Link>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ padding: '16px' }}>
          {/* Barra de búsqueda */}
          <IonSearchbar
            value={searchQuery}
            onIonInput={(e) => setSearchQuery(e.detail.value!)}
            placeholder="Buscar tipos..."
            style={{ marginBottom: '16px' }}
          />

          {/* Lista de tipos */}
          <IonGrid>
            <IonRow>
              {filteredTypes.map((type, index) => (
                <IonCol size="12" sizeMd="6" key={type.id}>
                  <IonCard>
                    <IonCardHeader>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <IonAvatar color={getTypeColor(index)}>
                          <IonIcon icon={list} />
                        </IonAvatar>
                        <div style={{ flex: 1 }}>
                          <IonCardTitle>{type.name}</IonCardTitle>
                          <IonCardSubtitle>{type.description}</IonCardSubtitle>
                        </div>
                      </div>
                    </IonCardHeader>
                    
                    <IonCardContent>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <Link to={`/pet-types/edit/${type.id}`} style={{ flex: 1 }}>
                          <IonButton expand="block" fill="outline" size="small" color="secondary">
                            <IonIcon icon={create} slot="start" />
                            Editar
                          </IonButton>
                        </Link>
                        
                        <IonButton
                          expand="block"
                          fill="outline"
                          size="small"
                          color="danger"
                          onClick={() => handleDelete(type.id)}
                        >
                          <IonIcon icon={trash} slot="start" />
                          Eliminar
                        </IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>

          {filteredTypes.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <IonIcon icon={list} style={{ fontSize: '48px', marginBottom: '16px' }} />
              <p>No se encontraron tipos de mascotas</p>
              {searchQuery && (
                <p>Intenta con otros términos de búsqueda</p>
              )}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TypesList;
