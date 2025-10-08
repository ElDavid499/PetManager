// src/pages/ProductDetail.tsx

import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
    IonButton, IonIcon, IonGrid, IonRow, IonCol, IonLabel,
    IonNote, IonImg, IonText, IonAlert
} from '@ionic/react';
import { arrowBack, createOutline, ellipsisVertical } from 'ionicons/icons';
import './ProductDetail.css'; // <<-- Necesitaremos este CSS

// Simulación de datos de productos (de Tab2.tsx, más detallado aquí)
interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
    description: string;
    sku: string;
    image: string;
}

const PRODUCTS_DATA: Product[] = [
    {
        id: '1',
        name: 'Alimento Premium para Perros',
        price: 54.99,
        stock: 50,
        category: 'Alimento',
        description: 'Alimento seco de alta digestibilidad, con vitaminas y minerales esenciales para perros adultos de razas medianas y grandes.',
        sku: 'AP-001',
        image: 'http://googleusercontent.com/image_collection/image_retrieval/8933746006548657116_0'
    },
    {
        id: '2',
        name: 'Vacuna Multidosis para Gatos',
        price: 89.99,
        stock: 12,
        category: 'Medicamento',
        description: 'Protección de amplio espectro contra las enfermedades virales y bacterianas más comunes en felinos. Requiere refrigeración.',
        sku: 'VM-002',
        image: 'http://googleusercontent.com/image_collection/image_retrieval/17212764022223656742_0'
    },
    // Añade el resto de los productos simulados aquí para que todos funcionen
    {
        id: '3',
        name: 'Juguete Interactivo para Aves',
        price: 12.50,
        stock: 5,
        category: 'Accesorio',
        description: 'Juguete de madera y sisal natural, ideal para el desgaste del pico y el enriquecimiento ambiental de aves pequeñas.',
        sku: 'JI-003',
        image: 'http://googleusercontent.com/image_collection/image_retrieval/12931299598695562089_0'
    },
    {
        id: '4',
        name: 'Shampoo Suave para Caballos',
        price: 35.00,
        stock: 20,
        category: 'Higiene',
        description: 'Fórmula profesional pH neutro, con acondicionadores que dejan el pelaje brillante y suave. Apto para pieles sensibles.',
        sku: 'SH-004',
        image: 'http://googleusercontent.com/image_collection/image_retrieval/8947871735343270503_0'
    },
    {
        id: '5',
        name: 'Lecho Sanitario de pino',
        price: 18.00,
        stock: 100,
        category: 'Higiene',
        description: 'Viruta de pino natural con alta capacidad de absorción y control de olores. Biodegradable.',
        sku: 'LS-005',
        image: 'https://via.placeholder.com/300x300/F0F0F0/888888?text=Lecho+Sanitario'
    },
];

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [product, setProduct] = useState<Product | null>(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        // Simular la búsqueda de la API por ID
        const foundProduct = PRODUCTS_DATA.find(p => p.id === id);
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            // Si el producto no se encuentra, mostrar error y volver
            setShowAlert(true);
        }
    }, [id]);

    const handleEdit = () => {
        // Redirigir a la vista de edición
        history.push(`/products/edit/${id}`);
    };

    if (showAlert) {
        return (
            <IonPage>
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => history.goBack()}
                    header="Error"
                    message={`Producto con ID ${id} no encontrado.`}
                    buttons={['Aceptar']}
                />
            </IonPage>
        );
    }

    if (!product) {
        return <IonPage><IonContent><p className="ion-padding">Cargando...</p></IonContent></IonPage>;
    }

    return (
        <IonPage>
            <IonHeader translucent={true} className="product-detail-header">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => history.goBack()}>
                            <IonIcon icon={arrowBack} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Detalles del Producto</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleEdit}>
                            <IonIcon icon={createOutline} slot="icon-only" />
                        </IonButton>
                        <IonButton>
                            <IonIcon icon={ellipsisVertical} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                {/* Contenedor de Imagen */}
                <div className="product-image-container">
                    <IonImg src={product.image} alt={product.name} />
                    <IonNote className={`stock-tag ${product.stock > 10 ? 'in-stock' : 'low-stock'}`}>
                        {product.stock > 0 ? `En stock: ${product.stock} unid.` : 'Agotado'}
                    </IonNote>
                </div>

                <div className="ion-padding">
                    {/* Precio y Nombre */}
                    <IonText color="primary">
                        <h1 className="product-price">${product.price.toFixed(2)}</h1>
                    </IonText>
                    <h2 className="product-name">{product.name}</h2>
                    <IonNote className="product-category">Categoría: {product.category}</IonNote>

                    <hr className="divider" />

                    {/* Ficha Técnica */}
                    <IonGrid className="info-grid">
                        <IonRow>
                            <IonCol size="6">
                                <IonLabel className="info-label">SKU</IonLabel>
                                <IonText>{product.sku}</IonText>
                            </IonCol>
                            <IonCol size="6">
                                <IonLabel className="info-label">Stock Actual</IonLabel>
                                <IonText>{product.stock} unidades</IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    {/* Descripción */}
                    <h3 className="section-title">Descripción</h3>
                    <IonText color="medium">
                        <p>{product.description}</p>
                    </IonText>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default ProductDetail;