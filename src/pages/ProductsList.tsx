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
import { pricetag, checkmarkCircle, closeCircle, create, trash } from 'ionicons/icons';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  categoryName?: string;
  image?: string;
}

interface Category {
  id: string;
  name: string;
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Datos de prueba
  useEffect(() => {
    const mockCategories: Category[] = [
      { id: '1', name: 'Alimento' },
      { id: '2', name: 'Medicamento' },
      { id: '3', name: 'Accesorios' }
    ];

    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Alimento Premium para Perros',
        description: 'Comida balanceada de alta calidad',
        price: 45.50,
        stock: 10,
        categoryId: '1',
        categoryName: 'Alimento'
      },
      {
        id: '2',
        name: 'Antipulgas',
        description: 'Tratamiento mensual contra pulgas',
        price: 20.00,
        stock: 5,
        categoryId: '2',
        categoryName: 'Medicamento'
      },
      {
        id: '3',
        name: 'Collar para Gatos',
        description: 'Collar ajustable con identificación',
        price: 15.00,
        stock: 0,
        categoryId: '3',
        categoryName: 'Accesorios'
      }
    ];

    setCategories(mockCategories);
    setProducts(mockProducts);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.categoryName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      setProducts(prev => prev.filter(product => product.id !== id));
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: 'Agotado', color: 'danger' as const };
    if (stock < 5) return { text: 'Poco Stock', color: 'warning' as const };
    return { text: 'Disponible', color: 'success' as const };
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getCategoryColor = (categoryId: string) => {
    const colors = ['primary', 'secondary', 'tertiary'];
    const index = parseInt(categoryId) - 1;
    return colors[index] || 'medium';
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Productos</IonTitle>
          <IonButtons slot="end">
            <Link to="/products/create">
              <IonButton fill="solid" color="primary">
                <IonIcon icon={pricetag} slot="start" />
                Nuevo Producto
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
            placeholder="Buscar productos..."
            style={{ marginBottom: '16px' }}
          />

          {/* Lista de productos */}
          <IonGrid>
            <IonRow>
              {filteredProducts.map((product) => {
                const stockStatus = getStockStatus(product.stock);
                return (
                  <IonCol size="12" key={product.id}>
                    <IonCard>
                      <IonCardHeader>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <IonAvatar>
                            <IonIcon icon={pricetag} />
                          </IonAvatar>
                          <div style={{ flex: 1 }}>
                            <IonCardTitle>{product.name}</IonCardTitle>
                            <IonCardSubtitle>{product.description}</IonCardSubtitle>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00C853' }}>
                              {formatPrice(product.price)}
                            </div>
                            <IonBadge color={getCategoryColor(product.categoryId)}>
                              {product.categoryName}
                            </IonBadge>
                          </div>
                        </div>
                      </IonCardHeader>
                      
                      <IonCardContent>
                        <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <strong>Stock:</strong> {product.stock} unidades
                          </div>
                          <IonBadge color={stockStatus.color}>
                            <IonIcon 
                              icon={product.stock > 0 ? checkmarkCircle : closeCircle} 
                              style={{ marginRight: '4px' }}
                            />
                            {stockStatus.text}
                          </IonBadge>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <Link to={`/products/detail/${product.id}`} style={{ flex: 1 }}>
                            <IonButton expand="block" fill="outline" size="small">
                              Ver Detalle
                            </IonButton>
                          </Link>
                          
                          <Link to={`/products/edit/${product.id}`} style={{ flex: 1 }}>
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
                            onClick={() => handleDelete(product.id)}
                          >
                            <IonIcon icon={trash} slot="start" />
                            Eliminar
                          </IonButton>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <IonIcon icon={pricetag} style={{ fontSize: '48px', marginBottom: '16px' }} />
              <p>No se encontraron productos</p>
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

export default ProductsList;
