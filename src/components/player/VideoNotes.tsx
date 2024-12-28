import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

export default function VideoNotes() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<string[]>([]);

  const handleAddNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold">Mes notes</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Prenez des notes..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={3}
          />
          <button
            onClick={handleAddNote}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Ajouter une note
          </button>
        </div>
        
        <div className="space-y-2">
          {notes.map((note, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}