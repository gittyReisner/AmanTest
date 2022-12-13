export interface Joke {  
    category: string;  
    type: string;  
    setup?: string; 
    joke?: string; 
    delivery?: string;  
    flags: Flag;
    id: number;
    error: boolean;
  }  
  interface Flag {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
  
  }

export interface DialogData {
  id: number;
  type: string;
}