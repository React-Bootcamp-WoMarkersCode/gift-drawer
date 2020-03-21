import React from 'react';

export const ListParticipants  = (props) => {
  return (  
    <table className="tableList">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        { 
          props.participantItems.length > 0 ? (
            props.participantItems.map((item) => (
                <tr key={ item.id }>
                  <td>{ item.Name }</td>
                  <td>{ item.Phone }</td>
                  <td>{ item.Email }</td>

                  <td className="table-list-actions">
                    <button className="btn-action"> deletar
                    </button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td>Não há motoristas cadastrados</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}