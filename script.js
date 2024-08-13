const input_Field = document.getElementById('numberInput');
const message_Div = document.getElementById('message');

input_Field.addEventListener('input', () => 
    {
        const value = parseInt(input_Field.value);

        if(isNaN(value))
            {
                messageDiv.textContent = ' ';
                return;
            }
        
        if(value < 0)
            {
                message_Div.textContent = "please enter a positive value";
            }
        else if( value % 2 == 0)
            {
                message_Div.textContent = `${value + 2}, ${value + 4}, ${value + 6}`;
            }
        else 
        {
             message_Div.textContent = `${value + 2}, ${value + 4}, ${value + 6}`;
        }

    });

    