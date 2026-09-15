export const money=(n:number)=>`₹${n.toLocaleString('en-IN')}`;
export const filterProducts=(items:any[],query:string)=>{const q=query.trim().toLowerCase();return q?items.filter(p=>`${p.name} ${p.category} ${p.description} ${p.tags.join(' ')}`.toLowerCase().includes(q)):items};
