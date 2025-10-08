import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
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
  IonMenuButton
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { person, checkmarkCircle, closeCircle, create, trash } from 'ionicons/icons';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'Administrador' | 'Veterinario' | 'Asistente';
  status: 'Activo' | 'Inactivo';
  avatar?: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Datos de prueba
  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: '1',
        name: 'Carlos Mendoza',
        email: 'carlos@example.com',
        phone: '3001112222',
        role: 'Administrador',
        status: 'Activo'
      },
      {
        id: '2',
        name: 'Sofía Ramirez',
        email: 'sofia@example.com',
        phone: '3002223333',
        role: 'Veterinario',
        status: 'Activo'
      },
      {
        id: '3',
        name: 'Ana López',
        email: 'ana@example.com',
        phone: '3003334444',
        role: 'Asistente',
        status: 'Inactivo'
      }
    ];
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      setUsers(prev => prev.filter(user => user.id !== id));
    }
  };

  const getStatusIcon = (status: string) => {
    return status === 'Activo' ? checkmarkCircle : closeCircle;
  };

  const getStatusColor = (status: string) => {
    return status === 'Activo' ? 'success' : 'danger';
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Administrador': return 'primary';
      case 'Veterinario': return 'secondary';
      case 'Asistente': return 'tertiary';
      default: return 'medium';
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Usuarios</IonTitle>
          <IonButtons slot="end">
            <Link to="/users/create">
              <IonButton fill="solid" color="primary">
                <IonIcon icon={person} slot="start" />
                Nuevo Usuario
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
            placeholder="Buscar usuarios..."
            style={{ marginBottom: '16px' }}
          />

          {/* Lista de usuarios */}
          <IonGrid>
            <IonRow>
              {filteredUsers.map((user) => (
                <IonCol size="12" key={user.id}>
                  <IonCard>
                    <IonCardHeader>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <IonAvatar>
                          <IonIcon icon={person} />
                        </IonAvatar>
                        <div style={{ flex: 1 }}>
                          <IonCardTitle>{user.name}</IonCardTitle>
                          <IonCardSubtitle>{user.email}</IonCardSubtitle>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <IonIcon
                            icon={getStatusIcon(user.status)}
                            color={getStatusColor(user.status)}
                          />
                          <IonBadge color={getRoleColor(user.role)}>
                            {user.role}
                          </IonBadge>
                        </div>
                      </div>
                    </IonCardHeader>
                    
                    <IonCardContent>
                      <div style={{ marginBottom: '12px' }}>
                        <strong>Teléfono:</strong> {user.phone}
                      </div>
                      
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <Link to={`/users/detail/${user.id}`} style={{ flex: 1 }}>
                          <IonButton expand="block" fill="outline" size="small">
                            Ver Detalle
                          </IonButton>
                        </Link>
                        
                        <Link to={`/users/edit/${user.id}`} style={{ flex: 1 }}>
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
                          onClick={() => handleDelete(user.id)}
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

          {filteredUsers.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <IonIcon icon={person} style={{ fontSize: '48px', marginBottom: '16px' }} />
              <p>No se encontraron usuarios</p>
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

export default UsersList;
