'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { BrandName, ThemeMode, tokens, DesignTokens } from '@/tokens';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { tokensToCSSVariables, applyCSSVariables } from '@/lib/theme-utils';
import { ColorEditor } from '@/components/editor/ColorEditor';
import { TypographyEditor } from '@/components/editor/TypographyEditor';
import { SpacingEditor } from '@/components/editor/SpacingEditor';
import { BorderRadiusEditor } from '@/components/editor/BorderRadiusEditor';
import { LivePreview } from '@/components/editor/LivePreview';

export default function TokenEditorPage() {
  const { brand: currentBrand, mode: currentMode } = useTheme();
  const [selectedBrand, setSelectedBrand] = useState<BrandName>(currentBrand);
  const [selectedMode, setSelectedMode] = useState<ThemeMode>(currentMode);
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'spacing' | 'borderRadius'>('colors');

  // Clone the current tokens for editing
  const [editedTokens, setEditedTokens] = useState<DesignTokens>(
    JSON.parse(JSON.stringify(tokens[selectedBrand][selectedMode]))
  );

  // Update edited tokens when brand/mode changes
  const handleBrandModeChange = (newBrand: BrandName, newMode: ThemeMode) => {
    setSelectedBrand(newBrand);
    setSelectedMode(newMode);
    setEditedTokens(JSON.parse(JSON.stringify(tokens[newBrand][newMode])));
  };

  // Apply changes to live theme
  const applyChanges = () => {
    const cssVariables = tokensToCSSVariables(editedTokens);
    applyCSSVariables(document.documentElement, cssVariables);
  };

  // Export tokens as JSON file
  const exportTokens = () => {
    const dataStr = JSON.stringify(editedTokens, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `${selectedBrand}-${selectedMode}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const tabs = [
    { id: 'colors' as const, label: 'Colors' },
    { id: 'typography' as const, label: 'Typography' },
    { id: 'spacing' as const, label: 'Spacing' },
    { id: 'borderRadius' as const, label: 'Border Radius' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface-background)' }}>
      {/* Header */}
      <div
        style={{
          borderBottom: '1px solid var(--color-surface-border)',
          backgroundColor: 'var(--color-surface-elevated)',
          padding: 'var(--spacing-4) var(--spacing-6)',
        }}
      >
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <h1 style={{ marginBottom: 'var(--spacing-4)' }}>Token Editor</h1>

          {/* Brand and Mode Selector */}
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
              <label style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '600' }}>
                Brand:
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => handleBrandModeChange(e.target.value as BrandName, selectedMode)}
                style={{
                  padding: 'var(--spacing-2) var(--spacing-3)',
                  fontSize: 'var(--typography-label-font-size)',
                  border: '1px solid var(--color-surface-border)',
                  borderRadius: 'var(--border-radius-md)',
                  backgroundColor: 'var(--color-surface-background)',
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                }}
              >
                <option value="carnow">CarNow</option>
                <option value="toyota">Toyota</option>
                <option value="ford">Ford</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
              <label style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '600' }}>
                Mode:
              </label>
              <select
                value={selectedMode}
                onChange={(e) => handleBrandModeChange(selectedBrand, e.target.value as ThemeMode)}
                style={{
                  padding: 'var(--spacing-2) var(--spacing-3)',
                  fontSize: 'var(--typography-label-font-size)',
                  border: '1px solid var(--color-surface-border)',
                  borderRadius: 'var(--border-radius-md)',
                  backgroundColor: 'var(--color-surface-background)',
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                }}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
            <Button variant="primary" onClick={applyChanges}>
              Apply Changes
            </Button>
            <Button variant="secondary" onClick={exportTokens}>
              Export JSON
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: 'var(--spacing-6)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-6)' }}>
          {/* Editor Panel */}
          <div>
            {/* Tabs */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-2)',
                marginBottom: 'var(--spacing-4)',
                borderBottom: '2px solid var(--color-surface-border)',
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: 'var(--spacing-3) var(--spacing-4)',
                    fontSize: 'var(--typography-body-font-size)',
                    fontWeight: activeTab === tab.id ? '700' : '400',
                    color: activeTab === tab.id ? 'var(--color-primary-500)' : 'var(--color-text-primary)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: activeTab === tab.id ? '2px solid var(--color-primary-500)' : '2px solid transparent',
                    cursor: 'pointer',
                    marginBottom: '-2px',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <Card variant="outlined" padding="large">
              {activeTab === 'colors' && (
                <div>
                  <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Color Editor</h2>
                  <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-6)' }}>
                    Edit color values for the selected brand and mode. Click the color squares or type hex values directly.
                  </p>
                  <ColorEditor
                    colors={editedTokens.colors}
                    onChange={(colors) => setEditedTokens({ ...editedTokens, colors })}
                  />
                </div>
              )}

              {activeTab === 'typography' && (
                <div>
                  <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Typography Editor</h2>
                  <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-6)' }}>
                    Edit typography scale and font families.
                  </p>
                  <TypographyEditor
                    typography={editedTokens.typography}
                    onChange={(typography) => setEditedTokens({ ...editedTokens, typography })}
                  />
                </div>
              )}

              {activeTab === 'spacing' && (
                <div>
                  <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Spacing Editor</h2>
                  <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-6)' }}>
                    Edit spacing scale values using sliders or direct input.
                  </p>
                  <SpacingEditor
                    spacing={editedTokens.spacing}
                    onChange={(spacing) => setEditedTokens({ ...editedTokens, spacing })}
                  />
                </div>
              )}

              {activeTab === 'borderRadius' && (
                <div>
                  <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Border Radius Editor</h2>
                  <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-6)' }}>
                    Edit border radius values using sliders or direct input.
                  </p>
                  <BorderRadiusEditor
                    borderRadius={editedTokens.borderRadius}
                    onChange={(borderRadius) => setEditedTokens({ ...editedTokens, borderRadius })}
                  />
                </div>
              )}
            </Card>
          </div>

          {/* Live Preview Panel */}
          <div>
            <Card variant="filled" padding="large">
              <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Live Preview</h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-6)', fontSize: 'var(--typography-label-font-size)' }}>
                Click "Apply Changes" to see your edits reflected here
              </p>
              <LivePreview />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
