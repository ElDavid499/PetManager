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
  IonBadge,
  IonButtons,
  IonAvatar,
  IonMenuButton
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { paw, create, trash, person } from 'ionicons/icons';

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  sex: 'Macho' | 'Hembra';
  typeId: string;
  typeName?: string;
  ownerId: string;
  ownerName?: string;
  health: 'Excelente' | 'Buena' | 'Regular' | 'Mala';
  avatar?: string;
}

interface PetType {
  id: string;
  name: string;
}

interface Owner {
  id: string;
  name: string;
}

const PetsList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [petTypes, setPetTypes] = useState<PetType[]>([]);
  const [owners, setOwners] = useState<Owner[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Datos de prueba
  useEffect(() => {
    const mockPetTypes: PetType[] = [
      { id: '1', name: 'Perro' },
      { id: '2', name: 'Gato' },
      { id: '3', name: 'Conejo' }
    ];

    const mockOwners: Owner[] = [
      { id: '1', name: 'Carlos Mendoza' },
      { id: '2', name: 'Sofía Ramirez' },
      { id: '3', name: 'Ana López' }
    ];

    const mockPets: Pet[] = [
      {
        id: '1',
        name: 'Max',
        breed: 'Golden Retriever',
        age: 3,
        sex: 'Macho',
        typeId: '1',
        typeName: 'Perro',
        ownerId: '1',
        ownerName: 'Carlos Mendoza',
        health: 'Buena'
      },
      {
        id: '2',
        name: 'Luna',
        breed: 'Persa',
        age: 2,
        sex: 'Hembra',
        typeId: '2',
        typeName: 'Gato',
        ownerId: '2',
        ownerName: 'Sofía Ramirez',
        health: 'Excelente'
      },
      {
        id: '3',
        name: 'Rex',
        breed: 'Labrador',
        age: 5,
        sex: 'Macho',
        typeId: '1',
        typeName: 'Perro',
        ownerId: '3',
        ownerName: 'Ana López',
        health: 'Regular'
      }
    ];

    setPetTypes(mockPetTypes);
    setOwners(mockOwners);
    setPets(mockPets);
  }, []);

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.typeName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.ownerName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta mascota?')) {
      setPets(prev => prev.filter(pet => pet.id !== id));
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'Excelente': return 'success';
      case 'Buena': return 'primary';
      case 'Regular': return 'warning';
      case 'Mala': return 'danger';
      default: return 'medium';
    }
  };

  const getSexColor = (sex: string) => {
    return sex === 'Macho' ? 'primary' : 'secondary';
  };

  const getTypeColor = (typeId: string) => {
    const colors = ['primary', 'secondary', 'tertiary'];
    const index = parseInt(typeId) - 1;
    return colors[index] || 'medium';
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mascotas</IonTitle>
          <IonButtons slot="end">
            <Link to="/pets/create">
              <IonButton fill="solid" color="primary">
                <IonIcon icon={paw} slot="start" />
                Nueva Mascota
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
            placeholder="Buscar mascotas..."
            style={{ marginBottom: '16px' }}
          />

          {/* Lista de mascotas */}
          <IonGrid>
            <IonRow>
              {filteredPets.map((pet) => (
                <IonCol size="12" key={pet.id}>
                  <IonCard>
                    <IonCardHeader>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <IonAvatar>
                          <IonIcon icon={paw} />
                        </IonAvatar>
                        <div style={{ flex: 1 }}>
                          <IonCardTitle>{pet.name}</IonCardTitle>
                          <IonCardSubtitle>{pet.breed} - {pet.age} años</IonCardSubtitle>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                          <IonBadge color={getSexColor(pet.sex)}>
                            {pet.sex}
                          </IonBadge>
                          <IonBadge color={getTypeColor(pet.typeId)}>
                            {pet.typeName}
                          </IonBadge>
                        </div>
                      </div>
                    </IonCardHeader>
                    
                    <IonCardContent>
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ marginBottom: '8px' }}>
                          <strong>Propietario:</strong> {pet.ownerName}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <strong>Estado de salud:</strong>
                          </div>
                          <IonBadge color={getHealthColor(pet.health)}>
                            {pet.health}
                          </IonBadge>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <Link to={`/pets/detail/${pet.id}`} style={{ flex: 1 }}>
                          <IonButton expand="block" fill="outline" size="small">
                            Ver Detalle
                          </IonButton>
                        </Link>
                        
                        <Link to={`/pets/edit/${pet.id}`} style={{ flex: 1 }}>
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
                          onClick={() => handleDelete(pet.id)}
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

          {filteredPets.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <IonIcon icon={paw} style={{ fontSize: '48px', marginBottom: '16px' }} />
              <p>No se encontraron mascotas</p>
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

export default PetsList;
