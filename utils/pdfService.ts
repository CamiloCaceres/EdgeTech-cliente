// utils/pdfService.ts
import pdfMake from "pdfmake/build/pdfmake";
// Import fonts differently
import * as pdfFonts from "pdfmake/build/vfs_fonts";

// Make sure pdfMake is defined before assigning vfs
if (typeof pdfMake !== 'undefined') {
  // @ts-ignore - Typescript might complain about this property
  pdfMake.vfs = pdfFonts?.pdfMake?.vfs;
}

// Alternative initialization if the above doesn't work
if (typeof window !== 'undefined' && !pdfMake.vfs) {
  // @ts-ignore - Typescript might complain about this property
  window.pdfMake = pdfMake;
  // @ts-ignore
  window.pdfMake.vfs = pdfFonts?.pdfMake?.vfs;
}

interface QuotationItem {
  expand: {
    product: {
      name: string;
    };
  };
  quantity: number;
  unit_price: number;
}

interface Client {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface Quotation {
  id: string;
  date: string;
  status: string;
  notes?: string;
  expand: {
    client: Client;
    'quotation_items(quotation)': QuotationItem[];
  };
}

export function generateQuotationPDF(quotation: Quotation) {
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Calculate totals
  const items = quotation.expand['quotation_items(quotation)'];
  const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);

  // Create the document definition
  const docDefinition = {
    content: [
      // Header
      {
        columns: [
          {
            width: '*',
            stack: [
              { text: 'QUOTATION', style: 'header' },
              { text: `#${quotation.id}`, style: 'subheader' }
            ]
          },
          {
            width: 'auto',
            stack: [
              { text: 'Status:', style: 'label' },
              { text: quotation.status.toUpperCase(), style: 'status' },
              { text: 'Date:', style: 'label', margin: [0, 10, 0, 0] },
              { text: new Date(quotation.date).toLocaleDateString() }
            ],
            alignment: 'right'
          }
        ]
      },

      // Spacing
      { text: '', margin: [0, 20] },

      // Client Information
      {
        columns: [
          {
            width: '*',
            stack: [
              { text: 'Bill To:', style: 'label' },
              { text: quotation.expand.client.name, style: 'clientName' },
              { text: quotation.expand.client.email },
              { text: quotation.expand.client.phone },
              { text: quotation.expand.client.address }
            ]
          },
          {
            width: '*',
            stack: [
              { text: 'From:', style: 'label' },
              { text: 'Your Company Name', style: 'companyName' },
              { text: 'company@email.com' },
              { text: '+1 234 567 890' },
              { text: '123 Business Street\nCity, State 12345' }
            ]
          }
        ]
      },

      // Spacing
      { text: '', margin: [0, 20] },

      // Items Table
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto', 'auto'],
          body: [
            // Header
            [
              { text: 'Product', style: 'tableHeader' },
              { text: 'Quantity', style: 'tableHeader' },
              { text: 'Unit Price', style: 'tableHeader' },
              { text: 'Total', style: 'tableHeader' }
            ],
            // Items
            ...items.map(item => [
              item.expand.product.name,
              item.quantity,
              formatCurrency(item.unit_price),
              formatCurrency(item.quantity * item.unit_price)
            ])
          ]
        }
      },

      // Totals
      {
        columns: [
          { width: '*', text: '' },
          {
            width: 'auto',
            stack: [
              {
                columns: [
                  { width: 'auto', text: 'Subtotal:', style: 'label', margin: [0, 10, 20, 0] },
                  { width: 'auto', text: formatCurrency(subtotal), margin: [0, 10, 0, 0] }
                ]
              },
              {
                columns: [
                  { width: 'auto', text: 'Total:', style: 'totalLabel', margin: [0, 10, 20, 0] },
                  { width: 'auto', text: formatCurrency(subtotal), style: 'total', margin: [0, 10, 0, 0] }
                ]
              }
            ]
          }
        ]
      },

      // Notes
      ...quotation.notes ? [
        { text: '', margin: [0, 20] },
        { text: 'Notes:', style: 'label' },
        { text: quotation.notes, style: 'notes' }
      ] : []
    ] as any[],

    // Styles
    styles: {
      header: {
        fontSize: 24,
        bold: true
      },
      subheader: {
        fontSize: 16,
        color: '#666666'
      },
      label: {
        fontSize: 12,
        color: '#666666',
        bold: true
      },
      status: {
        fontSize: 14,
        bold: true,
        color: '#4a5568'
      },
      clientName: {
        fontSize: 14,
        bold: true,
        margin: [0, 5, 0, 5] as [number, number, number, number]
      },
      companyName: {
        fontSize: 14,
        bold: true,
        margin: [0, 5, 0, 5] as [number, number, number, number]
      },
      tableHeader: {
        fontSize: 12,
        bold: true,
        fillColor: '#f7fafc',
        padding: 8
      },
      totalLabel: {
        fontSize: 14,
        bold: true
      },
      total: {
        fontSize: 14,
        bold: true
      },
      notes: {
        fontSize: 12,
        italics: true,
        color: '#666666'
      }
    },

    // Page settings
    pageSize: { width: 595.28, height: 841.89 },
    pageMargins: [40, 40, 40, 40] as [number, number, number, number],
    defaultStyle: {
      fontSize: 12,
      lineHeight: 1.3
    }
  };

  // Generate PDF
  return pdfMake.createPdf(docDefinition).open();
}