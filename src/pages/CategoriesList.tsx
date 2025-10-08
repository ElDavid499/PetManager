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
import { folder, create, trash } from 'ionicons/icons';

interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Datos de prueba
  useEffect(() => {
    const mockCategories: Category[] = [
      {
        id: '1',
        name: 'Alimento',
        description: 'Comidas y snacks para mascotas'
      },
      {
        id: '2',
        name: 'Medicamento',
        description: 'Medicamentos y tratamientos veterinarios'
      },
      {
        id: '3',
        name: 'Accesorios',
        description: 'Collares, correas, juguetes y más'
      },
      {
        id: '4',
        name: 'Higiene',
        description: 'Productos de limpieza y cuidado personal'
      }
    ];
    setCategories(mockCategories);
  }, []);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
      setCategories(prev => prev.filter(category => category.id !== id));
    }
  };

  const getCategoryColor = (index: number) => {
    const colors = ['primary', 'secondary', 'tertiary', 'success'];
    return colors[index % colors.length];
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Categorías</IonTitle>
          <IonButtons slot="end">
            <Link to="/categories/create">
              <IonButton fill="solid" color="primary">
                <IonIcon icon={folder} slot="start" />
                Nueva Categoría
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
            placeholder="Buscar categorías..."
            style={{ marginBottom: '16px' }}
          />

          {/* Lista de categorías */}
          <IonGrid>
            <IonRow>
              {filteredCategories.map((category, index) => (
                <IonCol size="12" sizeMd="6" key={category.id}>
                  <IonCard>
                    <IonCardHeader>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <IonAvatar color={getCategoryColor(index)}>
                          <IonIcon icon={folder} />
                        </IonAvatar>
                        <div style={{ flex: 1 }}>
                          <IonCardTitle>{category.name}</IonCardTitle>
                          <IonCardSubtitle>{category.description}</IonCardSubtitle>
                        </div>
                      </div>
                    </IonCardHeader>
                    
                    <IonCardContent>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <Link to={`/categories/edit/${category.id}`} style={{ flex: 1 }}>
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
                          onClick={() => handleDelete(category.id)}
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

          {filteredCategories.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <IonIcon icon={folder} style={{ fontSize: '48px', marginBottom: '16px' }} />
              <p>No se encontraron categorías</p>
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

export default CategoriesList;
