Social media

```mermaid



graph TD;
    A1[index.tsx]-->A
    A[rerenderTree.tsx]-- BrRouter -->B[App.tsx];
        B-->C[<Header/>];
            C-->c1((logo))
    
        B-->D[<Navbar/>];
        D--Link-->d1{{Profile}}
        
        subgraph    
            d1---d2{{Message}}
            d2---d3{{News}}
            end
           
        B--Route-->E[<Profile/>];
            E-->e1[<ProfileInfo/>];
            E-->e2[<MyPosts/>]
            e2-->e3(<Post/>)
            
        B--Route-->F[<Dialogs/>];
            F-->f1[<DialogItem/>];
            F-->f2[<Message/>];
            
            
            
           
   

 ```



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 