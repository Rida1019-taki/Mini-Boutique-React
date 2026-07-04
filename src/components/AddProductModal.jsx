import React, { useState } from 'react';
import { CloseIcon, PlusIcon } from './Icons';

function AddProductModal({ isOpen, onClose, onAddProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Informatique',
    image: ''
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est obligatoire';
    if (!formData.price || Number(formData.price) <= 0) newErrors.price = 'Le prix doit être supérieur à 0';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProduct = {
      id: Date.now(), // Generate unique ID
      name: formData.name,
      price: Number(formData.price),
      category: formData.category,
      image: formData.image.trim() || null // Let it fallback if blank
    };

    onAddProduct(newProduct);
    
    // Reset form
    setFormData({
      name: '',
      price: '',
      category: 'Informatique',
      image: ''
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content add-product-modal animate-scale" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fermer le modal">
          <CloseIcon className="w-5 h-5" />
        </button>

        <form onSubmit={handleSubmit} className="add-product-form">
          <h3 className="modal-title">
            <PlusIcon className="w-5 h-5 text-primary" />
            <span>Ajouter un produit</span>
          </h3>
          <p className="modal-subtitle">Ajoutez un nouvel article à votre catalogue de vente.</p>

          <div className="form-group">
            <label htmlFor="prod-name">Nom du produit *</label>
            <input 
              type="text" 
              id="prod-name"
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              placeholder="Ex: Clavier Mécanique RGB"
              className={errors.name ? 'input-error' : ''}
              required
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="prod-price">Prix (DH) *</label>
              <input 
                type="number" 
                id="prod-price"
                name="price" 
                value={formData.price} 
                onChange={handleChange}
                placeholder="Ex: 450"
                className={errors.price ? 'input-error' : ''}
                required
                min="1"
              />
              {errors.price && <span className="error-text">{errors.price}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="prod-category">Catégorie *</label>
              <div className="select-wrapper">
                <select 
                  id="prod-category"
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange}
                >
                  <option value="Informatique">Informatique</option>
                  <option value="Électronique">Électronique</option>
                  <option value="Maison">Maison</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="prod-image">URL de l'image (optionnel)</label>
            <input 
              type="url" 
              id="prod-image"
              name="image" 
              value={formData.image} 
              onChange={handleChange}
              placeholder="Ex: https://images.unsplash.com/... (laisser vide pour le fallback)"
            />
            <p className="field-hint">Si vide, un magnifique visuel vectoriel sera généré automatiquement selon la catégorie.</p>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Annuler
            </button>
            <button type="submit" className="btn-submit">
              Ajouter le produit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
